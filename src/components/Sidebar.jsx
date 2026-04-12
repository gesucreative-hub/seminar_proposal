import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

const SLIDE_TITLES = [
  { num: 1,  title: 'Cover' },
  { num: 2,  title: 'Latar Belakang' },
  { num: 3,  title: 'Rumusan Masalah & Tujuan' },
  { num: 4,  title: 'Metodologi Penelitian' },
  { num: 5,  title: 'Konsep Bisnis' },
  { num: 6,  title: 'Model Bisnis (Lean Canvas)' },
  { num: 7,  title: 'Value Proposition Canvas' },
  { num: 8,  title: 'Analisis Pasar' },
  { num: 9,  title: 'Data Pasar' },
  { num: 10, title: 'Matriks SWOT' },
  { num: 11, title: 'Kuantifikasi SWOT' },
  { num: 12, title: 'Analisis Kompetitor' },
  { num: 13, title: 'Executive Summary' },
  { num: 14, title: 'Penutup' },
]

export default function Sidebar({ current, onGoto }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger toggle */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
        style={{
          position: 'fixed', top: '1rem', left: '1rem', zIndex: 60,
          padding: '0.5rem',
          background: 'rgba(33,33,37,0.7)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '10px',
          color: '#ffffff',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Menu size={18} />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 70,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 80,
              width: '17rem',
              background: 'linear-gradient(160deg, #0d0830, #1a0f6e)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.25rem 1.25rem 1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ color: '#db991d', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
                  GELAMANG
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', marginTop: '0.1rem' }}>
                  Seminar Proposal Proyek Akhir
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Slide list */}
            <nav style={{ flex: 1, padding: '0.75rem 0.75rem' }}>
              {SLIDE_TITLES.map((slide, idx) => {
                const isActive = current === idx
                return (
                  <button
                    key={idx}
                    onClick={() => { onGoto(idx); setOpen(false) }}
                    style={{
                      width: '100%', textAlign: 'left',
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '8px',
                      marginBottom: '0.15rem',
                      background: isActive ? 'rgba(219,153,29,0.2)' : 'transparent',
                      border: isActive ? '1px solid rgba(219,153,29,0.4)' : '1px solid transparent',
                      color: isActive ? '#db991d' : 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{
                      minWidth: '1.5rem', height: '1.5rem',
                      borderRadius: '50%',
                      background: isActive ? '#db991d' : 'rgba(255,255,255,0.1)',
                      color: isActive ? '#212125' : 'rgba(255,255,255,0.6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 700,
                    }}>
                      {slide.num}
                    </span>
                    {slide.title}
                  </button>
                )
              })}
            </nav>

            {/* Footer */}
            <div style={{
              padding: '1rem 1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem',
            }}>
              I Gede Surya Dharma · NIM 2201014
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
