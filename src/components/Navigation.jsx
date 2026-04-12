import { ChevronLeft, ChevronRight, Home, BookOpen, Target, Search, Briefcase, LayoutTemplate, Gift, LineChart, PieChart, Grid, Calculator, Users, FileText, Flag, Map, Monitor } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDE_METADATA = [
  { title: 'Cover', icon: Home },
  { title: 'Latar Belakang', icon: BookOpen },
  { title: 'Masalah', icon: Target },
  { title: 'Metodologi', icon: Search },
  { title: 'Konsep', icon: Briefcase },
  { title: 'Lean Canvas', icon: LayoutTemplate },
  { title: 'VPC', icon: Gift },
  { title: 'Analisis', icon: LineChart },
  { title: 'STP', icon: Map },
  { title: 'Data Pasar', icon: PieChart },
  { title: 'SWOT', icon: Grid },
  { title: 'Kuantifikasi', icon: Calculator },
  { title: 'Kompetitor', icon: Users },
  { title: 'Summary', icon: FileText },
  { title: 'Penutup', icon: Flag },
]

export default function Navigation({ current, total, onPrev, onNext, onGoto }) {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0 })
  
  const navRef = useRef(null)
  const containerRef = useRef(null)

  // ── Launch presenter mode ─────────────────────────────────────────
  const launchPresenter = () => {
    // Open audience view as popup (user drags to second monitor → F11)
    window.open(
      '/?mode=audience',
      'GelamangAudience',
      'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no'
    )
    // Open presenter dashboard as popup (stays on laptop)
    window.open(
      '/?mode=presenter',
      'GelamangPresenter',
      'width=1100,height=720,menubar=no,toolbar=no,location=no,status=no'
    )
    // Current tab is left completely untouched ✓
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); onNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); onPrev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onNext, onPrev])

  // Auto-scroll the tab controller to keep the active item in view
  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('[data-active="true"]')
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [current])

  const handleMouseEnter = (e, idx, item) => {
    setHoveredIdx(idx)
    if (idx !== current) {
      const btnRect = e.currentTarget.getBoundingClientRect()
      const cRect = containerRef.current.getBoundingClientRect()
      setTooltip({
        visible: true,
        text: item.title,
        x: btnRect.left - cRect.left + (btnRect.width / 2)
      })
    } else {
      setTooltip(t => ({ ...t, visible: false }))
    }
  }

  const handleMouseLeave = () => {
    setHoveredIdx(null)
    setTooltip(t => ({ ...t, visible: false }))
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 9999, // Super high z-index above all slide layers
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none', // Allow clicks to pass through the empty background area
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          maxWidth: '95vw',
          pointerEvents: 'auto', // Re-enable clicks for the nav elements
        }}
      >
        {/* Absolute floating tooltip at container level avoids overflow clipping */}
        <AnimatePresence>
          {tooltip.visible && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9, x: '-50%' }}
              animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, y: 4, scale: 0.9, x: '-50%' }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '-34px',
                left: tooltip.x,
                background: '#212125',
                color: '#ffffff',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                padding: '5px 10px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 10000,
              }}
            >
              {tooltip.text}
              {/* Tooltip downward caret */}
              <div style={{
                position: 'absolute', bottom: '-4px', left: '50%', marginLeft: '-4px',
                width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '4px solid #212125'
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            color: current === 0 ? 'rgba(0, 0, 0, 0.15)' : '#6b6b6e',
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            boxShadow: '0 4px 16px rgba(54, 30, 219, 0.08)',
            transition: 'all 0.2s',
          }}
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        {/* Pill Tab Controller */}
        <div
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          onScroll={() => setTooltip(t => ({ ...t, visible: false }))}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.85)', // Light matching theme
            backdropFilter: 'blur(12px)',
            padding: '5px',
            borderRadius: '999px',
            boxShadow: '0 8px 32px rgba(54, 30, 219, 0.12)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            overflowX: 'auto',
            scrollbarWidth: 'none', // Firefox
            WebkitOverflowScrolling: 'touch',
          }}
          className="hide-scrollbar"
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}} />
          
          {SLIDE_METADATA.map((item, idx) => {
            const isActive = current === idx
            const isHovered = hoveredIdx === idx
            const Icon = item.icon

            return (
              <button
                key={idx}
                data-active={isActive}
                onClick={() => onGoto(idx)}
                onMouseEnter={(e) => handleMouseEnter(e, idx, item)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isActive ? '8px 16px' : '8px 12px',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: isActive ? '#ffffff' : (isHovered ? '#361edb' : '#908f92'),
                  flexShrink: 0,
                  outline: 'none',
                  transition: 'padding 0.3s ease, color 0.2s ease',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 50,
                      background: '#361edb', // Brand primary blue
                      boxShadow: '0 2px 8px rgba(54, 30, 219, 0.4)'
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center' }}>
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, paddingLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', paddingLeft: 6 }}
                      exit={{ opacity: 0, width: 0, paddingLeft: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.02em',
                        overflow: 'hidden',
                      }}
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '42px', height: '42px', borderRadius: '50%',
            background: current === total - 1 ? 'rgba(255, 255, 255, 0.9)' : '#db991d', // Gold for Next
            backdropFilter: 'blur(12px)',
            border: current === total - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
            color: current === total - 1 ? 'rgba(0,0,0,0.15)' : '#ffffff', // White icon on gold
            cursor: current === total - 1 ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            boxShadow: current === total - 1 ? 'none' : '0 4px 16px rgba(219, 153, 29, 0.4)',
            transition: 'all 0.2s',
          }}
          whileHover={current !== total - 1 ? { scale: 1.05 } : {}}
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>

        {/* Present Button */}
        <button
          onClick={launchPresenter}
          title="Buka Presenter Mode (Dual Screen)"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'rgba(54, 30, 219, 0.92)',
            backdropFilter: 'blur(12px)',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            flexShrink: 0,
            boxShadow: '0 4px 16px rgba(54, 30, 219, 0.4)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Monitor size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
