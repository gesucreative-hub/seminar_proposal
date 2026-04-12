import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft, ChevronRight, Monitor, Clock, Play, Pause, RotateCcw,
  FileText, Maximize2, X
} from 'lucide-react'
import { createChannel, MSG } from './presenterChannel'

// ─── Slide imports (same as App.jsx) ──────────────────────────────────────
import Cover             from '../slides/01_Cover'
import LatarBelakang     from '../slides/02_LatarBelakang'
import RumusanMasalah    from '../slides/03_RumusanMasalah'
import Metodologi        from '../slides/04_MetodologiPenelitian'
import KonsepBisnis      from '../slides/05_KonsepBisnis'
import LeanCanvas        from '../slides/06_LeanCanvas'
import VPC               from '../slides/06b_VPC'
import AnalisisPasar     from '../slides/07_AnalisisPasar'
import STP               from '../slides/07b_STP'
import DataPasar         from '../slides/08_DataPasar'
import Swot              from '../slides/09_Swot'
import SwotKuantifikasi  from '../slides/10_SwotKuantifikasi'
import KompetitorAnalisis from '../slides/11_KompetitorAnalisis'
import ExecutiveSummary  from '../slides/12_ExecutiveSummary'
import Closing           from '../slides/13_Closing'

const SLIDES = [
  Cover, LatarBelakang, RumusanMasalah, Metodologi,
  KonsepBisnis, LeanCanvas, VPC, AnalisisPasar, STP, DataPasar,
  Swot, SwotKuantifikasi, KompetitorAnalisis, ExecutiveSummary, Closing,
]

const SLIDE_TITLES = [
  'Cover', 'Latar Belakang', 'Rumusan Masalah', 'Metodologi Penelitian',
  'Konsep Bisnis', 'Lean Canvas', 'Value Proposition Canvas', 'Analisis Pasar',
  'STP Analysis', 'Data Pasar', 'Matriks SWOT', 'Kuantifikasi SWOT',
  'Analisis Kompetitor', 'Executive Summary', 'Penutup',
]

const NOTES_KEY = 'gelamang-presenter-notes'

function loadNotes() {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY) || '{}') }
  catch { return {} }
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

// ─── Elapsed timer helpers ────────────────────────────────────────────────
function fmtElapsed(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function fmtClock() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
}

// ─── Tiny slide thumbnail (CSS-scaled div) ──────────────────────────────
// The button itself has overflow:hidden + fixed w/h, so the 1280px inner div
// overflows layout but is clipped visually. NO position:absolute needed.
function SlideThumbnail({ SlideComp, isActive, onClick, idx }) {
  const THUMB_W = 213
  const THUMB_H = 120
  const SCALE   = THUMB_W / 1280  // ≈ 0.1664

  return (
    <button
      onClick={onClick}
      title={SLIDE_TITLES[idx]}
      style={{
        flexShrink: 0,
        width: `${THUMB_W}px`,
        height: `${THUMB_H}px`,
        borderRadius: '8px',
        overflow: 'hidden',
        border: isActive ? '3px solid #361edb' : '2px solid rgba(255,255,255,0.12)',
        boxShadow: isActive ? '0 0 0 3px rgba(54,30,219,0.35)' : '0 2px 8px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        background: '#fff',
        position: 'relative',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        padding: 0,
        // isolate stacking context so nothing leaks out
        isolation: 'isolate',
      }}
    >
      {/* Inner div overflows 1280px but is clipped by the button's overflow:hidden */}
      <div style={{
        width: '1280px',
        height: '720px',
        transform: `scale(${SCALE})`,
        transformOrigin: 'top left',
        pointerEvents: 'none',
      }}>
        <SlideComp />
      </div>

      {/* Slide number badge */}
      <div style={{
        position: 'absolute', bottom: '5px', right: '7px',
        background: 'rgba(0,0,0,0.6)', color: '#fff',
        fontSize: '10px', fontWeight: 700,
        padding: '2px 6px', borderRadius: '5px',
        zIndex: 2,
      }}>
        {idx + 1}
      </div>

      {isActive && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '6px',
          background: 'rgba(54,30,219,0.06)',
          border: '2px solid #361edb', pointerEvents: 'none', zIndex: 3,
        }} />
      )}
    </button>
  )
}

// ─── Current slide PREVIEW ──────────────────────────────────────────────
// ResizeObserver gives us the exact container width so we can compute
// an explicit pixel height (no aspect-ratio trick). The inner 1280px div
// overflows but is clipped by overflow:hidden on the outer container.
function SlidePreview({ SlideComp }) {
  const containerRef = useRef(null)
  const [dims, setDims] = useState({ w: 640, h: 360 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setDims({ w, h: Math.round(w * 9 / 16) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const scale = dims.w / 1280

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: `${dims.h}px`,   // explicit pixel height — no aspect-ratio
        borderRadius: '14px',
        overflow: 'hidden',       // clips the 1280px inner div
        background: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        isolation: 'isolate',     // own stacking context
      }}
    >
      {/* NOT position:absolute — div simply overflows and gets clipped */}
      <div style={{
        width: '1280px',
        height: '720px',
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        pointerEvents: 'none',
      }}>
        <SlideComp />
      </div>
    </div>
  )
}


// ═══════════════════════════════════════════════════════════════════════════
export default function PresenterApp() {
  const [current, setCurrent]     = useState(0)
  const [direction, setDirection] = useState(1)
  const [notes, setNotes]         = useState(loadNotes)
  const [clock, setClock]         = useState(fmtClock)
  const [elapsed, setElapsed]     = useState(0)
  const [running, setRunning]     = useState(false)
  const [audienceWin, setAudienceWin] = useState(null)

  const channelRef  = useRef(null)
  const thumbsRef   = useRef(null)
  const timerRef    = useRef(null)

  // ── BroadcastChannel setup ───────────────────────────────────────────
  useEffect(() => {
    const ch = createChannel()
    channelRef.current = ch

    ch.onmessage = ({ data }) => {
      if (data.type === MSG.AUDIENCE_READY) {
        // Audience window just opened — sync it with current state
        ch.postMessage({ type: MSG.SYNC_STATE, slide: current })
      }
    }

    return () => ch.close()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Broadcast every time current slide changes ───────────────────────
  useEffect(() => {
    channelRef.current?.postMessage({ type: MSG.GOTO_SLIDE, slide: current })
    // Auto-scroll thumbnail strip to keep active in view
    if (thumbsRef.current) {
      const active = thumbsRef.current.children[current]
      if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [current])

  // ── Clock ticker (every 30s is fine) ────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setClock(fmtClock()), 30_000)
    return () => clearInterval(id)
  }, [])

  // ── Elapsed stopwatch ────────────────────────────────────────────────
  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [running])

  // ── Keyboard navigation ──────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      // Don't hijack keys while the user is typing in the notes textarea
      const tag = document.activeElement?.tagName?.toLowerCase()
      if (tag === 'textarea' || tag === 'input') return

      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Navigation helpers ───────────────────────────────────────────────
  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
    if (!running) setRunning(true) // auto-start timer on first navigation
  }, [current, running])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // ── Notes persistence ────────────────────────────────────────────────
  const handleNoteChange = (text) => {
    const updated = { ...notes, [current]: text }
    setNotes(updated)
    saveNotes(updated)
  }

  // ── Open audience window ─────────────────────────────────────────────
  const openAudience = () => {
    if (audienceWin && !audienceWin.closed) {
      audienceWin.focus()
      return
    }
    const w = window.open(
      '/?mode=audience',
      'GelamangAudience',
      'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no'
    )
    setAudienceWin(w)
  }

  const CurrentSlide = SLIDES[current]
  const NextSlide    = SLIDES[current + 1]

  // ═══════════════ RENDER ══════════════════════════════════════════════
  return (
    <div style={{
      width: '100vw', height: '100dvh',
      background: '#18181b',
      color: '#fff',
      fontFamily: "'Lexend Deca', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* ══ TOP BAR ══════════════════════════════════════════════════════ */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.6rem 1.5rem',
        background: '#0f0f11',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        {/* Left: title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#361edb', boxShadow: '0 0 8px #361edb' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a1a1aa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Gelamang · Presenter View
          </span>
          <span style={{
            background: '#361edb22', color: '#9b8fed',
            borderRadius: '6px', padding: '0.15rem 0.55rem',
            fontSize: '0.6rem', fontWeight: 700,
          }}>
            {current + 1} / {SLIDES.length}
          </span>
        </div>

        {/* Center: clock + timer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e4e4e7', fontSize: '1.1rem', fontWeight: 700 }}>
            <Clock size={14} color="#9b8fed" />
            {clock}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, fontVariantNumeric: 'tabular-nums', color: elapsed > 0 ? '#db991d' : '#52525b' }}>
              {fmtElapsed(elapsed)}
            </span>
            <button onClick={() => setRunning(r => !r)} style={{ ...iconBtn, color: running ? '#db991d' : '#52525b' }}>
              {running ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button onClick={() => { setElapsed(0); setRunning(false) }} style={{ ...iconBtn, color: '#52525b' }}>
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Right: audience window button */}
        <button
          onClick={openAudience}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.4rem 0.9rem',
            background: '#361edb',
            borderRadius: '8px',
            border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: '0.7rem', fontWeight: 700,
            boxShadow: '0 4px 16px rgba(54,30,219,0.4)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Monitor size={14} />
          Tampilkan ke Monitor
        </button>
      </div>

      {/* ══ MAIN CONTENT AREA ════════════════════════════════════════════ */}
      <div style={{
        flex: 1, display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '1rem',
        padding: '1rem 1.25rem',
        minHeight: 0,
        overflow: 'hidden',
      }}>

        {/* ── LEFT COL: current preview + next slide label ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: 0 }}>

          {/* Current slide label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                Slide Saat Ini
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e4e4e7' }}>
                {SLIDE_TITLES[current]}
              </div>
            </div>
            {/* Prev / Next controls */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={goPrev} disabled={current === 0} style={navBtn(current === 0)}>
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button onClick={goNext} disabled={current === SLIDES.length - 1} style={navBtn(current === SLIDES.length - 1)}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Current slide preview */}
          <div style={{ flex: 1, minHeight: 0 }}>
            <SlidePreview SlideComp={CurrentSlide} />
          </div>

          {/* Next slide label + mini preview */}
          {NextSlide && (
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                  Selanjutnya →
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#71717a' }}>
                  {SLIDE_TITLES[current + 1]}
                </div>
              </div>
              <div style={{
                width: '192px', height: '108px', borderRadius: '8px',
                overflow: 'hidden', background: '#fff',
                border: '1.5px solid rgba(255,255,255,0.08)',
                flexShrink: 0,
                isolation: 'isolate',
              }}>
                <div style={{ width: '1280px', height: '720px', transform: 'scale(0.15)', transformOrigin: 'top left', pointerEvents: 'none' }}>
                  <NextSlide />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT COL: notes panel ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.6rem',
          background: '#0f0f11',
          borderRadius: '14px',
          padding: '1rem',
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
            <FileText size={14} color="#9b8fed" />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Catatan Slide {current + 1}
            </span>
          </div>
          <textarea
            value={notes[current] || ''}
            onChange={e => handleNoteChange(e.target.value)}
            placeholder="Tambahkan catatan untuk slide ini…&#10;&#10;Catatan disimpan otomatis."
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              color: '#e4e4e7',
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '0.82rem',
              lineHeight: 1.7,
              padding: '0.75rem',
              resize: 'none',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(54,30,219,0.5)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
          <div style={{ fontSize: '0.58rem', color: '#3f3f46', textAlign: 'right', flexShrink: 0 }}>
            Disimpan otomatis ke localStorage
          </div>
        </div>
      </div>

      {/* ══ THUMBNAIL STRIP ══════════════════════════════════════════════ */}
      <div style={{
        flexShrink: 0,
        background: '#0f0f11',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '0.75rem 1.25rem',
        height: '148px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div
          ref={thumbsRef}
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            paddingBottom: '2px',
          }}
          className="hide-scrollbar"
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {SLIDES.map((Slide, idx) => (
            <SlideThumbnail
              key={idx}
              idx={idx}
              SlideComp={Slide}
              isActive={current === idx}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Style helpers ────────────────────────────────────────────────────────
const iconBtn = {
  background: 'none', border: 'none', cursor: 'pointer',
  padding: '4px', borderRadius: '6px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'color 0.15s',
}

const navBtn = (disabled) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '36px', height: '36px', borderRadius: '50%',
  background: disabled ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.1)',
  border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
  color: disabled ? '#3f3f46' : '#e4e4e7',
  transition: 'background 0.15s',
})
