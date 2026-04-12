import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X, Calendar, Cpu, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'
import { timelineData, techStackData, interviewGuideData } from '../data/appendixData'

// ─── Timeline Tab ────────────────────────────────────────────
function TimelineTab() {
  const TOTAL_WEEKS = timelineData.weeks.length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Week header — STICKY */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `12rem repeat(${TOTAL_WEEKS}, 1fr)`,
        gap: '2px',
        marginBottom: '0.25rem',
        position: 'sticky',
        top: '-1.25rem', // Offset for the tab content padding
        background: '#f8f8fa',
        zIndex: 10,
        padding: '0.5rem 0',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <div style={{ color: '#908f92', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', paddingLeft: '0.25rem' }}>
          Kegiatan
        </div>
        {timelineData.weeks.map((w, i) => (
          <div key={i} style={{
            textAlign: 'center', fontSize: '0.55rem', fontWeight: 700,
            color: '#908f92', letterSpacing: '0.04em',
            borderBottom: '2px solid',
            borderColor: i < 4 ? '#361edb' : i < 8 ? '#db991d' : '#54c980',
            paddingBottom: '0.25rem',
          }}>
            {w.label}
          </div>
        ))}
      </div>

      {/* Phase rows */}
      {timelineData.phases.map((phase) => (
        <div key={phase.phase} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {/* Phase header */}
          <div style={{
            background: `${phase.color}18`,
            border: `1px solid ${phase.color}44`,
            borderRadius: '8px 8px 0 0',
            padding: '0.35rem 0.6rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <div style={{
              background: phase.color, color: '#fff',
              borderRadius: '4px', padding: '0.1rem 0.4rem',
              fontSize: '0.55rem', fontWeight: 700,
            }}>{phase.phase}</div>
            <span style={{ color: phase.color, fontWeight: 700, fontSize: '0.68rem' }}>{phase.title}</span>
          </div>

          {/* Tasks */}
          {phase.tasks.map((task) => (
            <div key={task.no} style={{
              display: 'grid',
              gridTemplateColumns: `12rem repeat(${TOTAL_WEEKS}, 1fr)`,
              gap: '2px',
              alignItems: 'center',
              background: task.isMilestone ? `${phase.color}10` : '#ffffff',
              border: task.isMilestone ? `1px solid ${phase.color}44` : '1px solid #f2f2f2',
              borderRadius: '6px', padding: '0.25rem 0',
            }}>
              <div style={{
                fontSize: '0.62rem',
                color: task.isMilestone ? phase.color : '#46464a',
                fontWeight: task.isMilestone ? 700 : 400,
                paddingLeft: '0.6rem', paddingRight: '0.4rem',
                lineHeight: 1.4,
              }}>
                <span style={{ color: '#908f92', marginRight: '0.35rem', fontSize: '0.55rem' }}>
                  {task.no}.
                </span>
                {task.desc}
              </div>
              {timelineData.weeks.map((_, wIdx) => (
                <div key={wIdx} style={{
                  height: '20px', borderRadius: '4px',
                  background: task.active.includes(wIdx)
                    ? task.isMilestone
                      ? `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`
                      : phase.color
                    : '#f5f5f7',
                  transition: 'background 0.2s',
                  boxShadow: task.active.includes(wIdx) ? `0 2px 6px ${phase.color}44` : 'none',
                }} />
              ))}
            </div>
          ))}
        </div>
      ))}

      <p style={{ color: '#908f92', fontSize: '0.6rem', fontStyle: 'italic', textAlign: 'right', marginTop: '0.25rem' }}>
        Sumber: Lampiran III, Matriks Linimasa & Sprint Pengerjaan
      </p>
    </div>
  )
}

// ─── Tech Stack Tab ──────────────────────────────────────────
function TechStackTab() {
  const categoryColors = {
    Framework: '#361edb',
    'Styling & UI': '#7c3aed',
    'Backend & DB': '#3ecf8e',
    Payment: '#00a8e6',
    Deployment: '#46464a',
    Analytics: '#f54e00',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      {techStackData.map((item, i) => {
        const c = categoryColors[item.category] || '#361edb'
        return (
          <motion.div key={i}
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            style={{
              background: '#ffffff', borderRadius: '10px',
              padding: '0.75rem 1rem',
              boxShadow: '0 2px 8px rgba(54,30,219,0.07)',
              borderLeft: `3px solid ${c}`,
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '0.5rem', alignItems: 'start',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{
                  background: `${c}18`, color: c,
                  borderRadius: '4px', padding: '0.1rem 0.4rem',
                  fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.05em',
                }}>{item.category}</span>
                <span style={{ color: '#212125', fontWeight: 700, fontSize: '0.78rem' }}>{item.tech}</span>
              </div>
              <p style={{ color: '#6b6b6e', fontSize: '0.68rem', lineHeight: 1.55 }}>{item.reason}</p>
            </div>
          </motion.div>
        )
      })}
      <p style={{ color: '#908f92', fontSize: '0.6rem', fontStyle: 'italic', textAlign: 'right', marginTop: '0.25rem' }}>
        Sumber: Lampiran II, Spesifikasi Teknologi Pengembangan
      </p>
    </div>
  )
}

// ─── Interview Guide Tab ─────────────────────────────────────
function InterviewTab() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {/* Meta info */}
      <div style={{
        background: 'linear-gradient(135deg, #0d0830, #1a0f6e)',
        borderRadius: '10px', padding: '0.75rem 1rem', color: '#ffffff',
        display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.25rem',
      }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Target</div>
          <div style={{ color: '#db991d', fontSize: '0.7rem', fontWeight: 600 }}>{interviewGuideData.target}</div>
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Data Identitas</div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.68rem' }}>{interviewGuideData.fields.join(' · ')}</div>
        </div>
      </div>

      {interviewGuideData.sections.map((section, si) => {
        const isOpen = expanded === si
        return (
          <div key={si} style={{
            background: '#ffffff', borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(54,30,219,0.06)',
            overflow: 'hidden',
            border: isOpen ? `1px solid ${section.color}44` : '1px solid #f2f2f2',
          }}>
            <button
              onClick={() => setExpanded(isOpen ? null : si)}
              style={{
                width: '100%', background: 'transparent', border: 'none',
                padding: '0.7rem 1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: section.color,
                }} />
                <span style={{ color: section.color, fontWeight: 700, fontSize: '0.75rem' }}>
                  {section.title}
                </span>
                {!section.isIntro && !section.isOutro && (
                  <span style={{
                    background: `${section.color}18`, color: section.color,
                    borderRadius: '4px', padding: '0.05rem 0.35rem',
                    fontSize: '0.55rem', fontWeight: 700,
                  }}>
                    {section.questions.length} pertanyaan
                  </span>
                )}
              </div>
              <div style={{ color: section.color }}>
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {section.questions.map((q, qi) => (
                      <div key={qi} style={{
                        display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                        background: `${section.color}08`, borderRadius: '8px',
                        padding: '0.5rem 0.75rem',
                      }}>
                        <span style={{
                          minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%',
                          background: section.color, color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.55rem', fontWeight: 800, flexShrink: 0,
                        }}>
                          {q.no}
                        </span>
                        <p style={{
                          color: (section.isIntro || section.isOutro) ? '#212125' : '#46464a',
                          fontSize: '0.7rem', lineHeight: 1.6,
                          fontStyle: (section.isIntro || section.isOutro) ? 'italic' : 'normal',
                          fontWeight: (section.isIntro || section.isOutro) ? 500 : 400,
                        }}>
                          {q.q}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
      <p style={{ color: '#908f92', fontSize: '0.6rem', fontStyle: 'italic', textAlign: 'right', marginTop: '0.25rem' }}>
        Sumber: Lampiran I, Pedoman Wawancara Semi-Terstruktur B2B
      </p>
    </div>
  )
}

// ─── Main AppendixModal Component ────────────────────────────
const TABS = [
  { key: 'timeline', label: 'Linimasa & Sprint', icon: Calendar, color: '#361edb' },
  { key: 'tech',     label: 'Tech Stack MVP',   icon: Cpu,      color: '#3ecf8e' },
  { key: 'interview', label: 'Panduan Wawancara', icon: MessageSquare, color: '#db991d' },
]

export default function AppendixModal() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('timeline')

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(54,30,219,0.35)' }}
        whileTap={{ scale: 0.95 }}
        title="Lampiran: Linimasa, Tech Stack & Panduan Wawancara"
        style={{
          position: 'fixed', bottom: '4.5rem', right: '1.25rem', zIndex: 55,
          width: '44px', height: '44px', borderRadius: '14px',
          background: 'linear-gradient(135deg, #361edb, #5b38f5)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#ffffff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(54,30,219,0.4)',
        }}
      >
        <BookOpen size={18} />
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="appendix-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 20000,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1.5rem', // safe area
              }}
              onClick={() => setOpen(false)}
            >
              {/* Panel */}
              <motion.div
                key="appendix-panel"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                style={{
                  width: 'min(95vw, 900px)',
                  maxHeight: '90dvh',
                  background: '#f8f8fa',
                  borderRadius: '24px',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}
              >
              {/* Modal Header */}
              <div style={{
                background: 'linear-gradient(135deg, #0d0830, #1a0f6e)',
                padding: '1rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <div>
                  <div style={{ color: '#db991d', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Lampiran Penelitian
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginTop: '0.1rem' }}>
                    Gelamang — Seminar Proposal Proyek Akhir
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: 'rgba(255,255,255,0.1)', border: 'none',
                    borderRadius: '8px', padding: '0.4rem',
                    color: 'rgba(255,255,255,0.8)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tabs */}
              <div style={{
                display: 'flex', gap: '0.25rem',
                padding: '0.75rem 1.5rem 0',
                background: '#ffffff',
                borderBottom: '1px solid #f0f0f2',
                flexShrink: 0,
              }}>
                {TABS.map(tab => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.key
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        padding: '0.5rem 0.875rem',
                        borderRadius: '8px 8px 0 0',
                        border: 'none',
                        background: isActive ? tab.color : 'transparent',
                        color: isActive ? '#ffffff' : '#908f92',
                        fontFamily: 'inherit', fontSize: '0.72rem', fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderBottom: isActive ? `2px solid ${tab.color}` : '2px solid transparent',
                      }}
                    >
                      <Icon size={13} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'timeline'  && <TimelineTab />}
                    {activeTab === 'tech'      && <TechStackTab />}
                    {activeTab === 'interview' && <InterviewTab />}
                  </motion.div>
                </AnimatePresence>
              </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
