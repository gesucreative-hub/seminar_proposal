import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ifasData, efasData, sfasData, sfasTotal, ieMatrix, towsStrategies } from '../data/swotData'
import SlideLayout from '../components/SlideLayout'

function ScoreTable({ title, color, groups, isModal }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: color, color: '#ffffff',
        fontWeight: 700, fontSize: isModal ? '0.9rem' : '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: isModal ? '0.4rem 0.8rem' : '0.25rem 0.5rem', borderRadius: '6px', marginBottom: isModal ? '0.8rem' : '0.5rem', display: 'inline-block', alignSelf: 'flex-start'
      }}>
        {title}
      </div>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isModal ? '0.85rem' : '0.55rem' }}>
          <thead>
            <tr style={{ background: '#f2f2f2' }}>
              {['Faktor', 'Bobot', 'Rating', 'Skor'].map(h => (
                <th key={h} style={{ padding: isModal ? '0.4rem 0.5rem' : '0.2rem 0.3rem', textAlign: h === 'Faktor' ? 'left' : 'center', color: '#908f92', fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <React.Fragment key={group.label}>
                <tr style={{ background: `${color}15` }}>
                  <td colSpan={4} style={{ padding: isModal ? '0.4rem 0.5rem' : '0.2rem 0.3rem', color: color, fontWeight: 700, fontSize: isModal ? '0.85rem' : '0.55rem' }}>
                    {group.label}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.code} style={{ borderBottom: '1px solid #f2f2f2' }}>
                    <td style={{ padding: isModal ? '0.4rem 0.5rem' : '0.2rem 0.3rem', color: '#212125', lineHeight: 1.35 }}>
                      <span style={{ color: '#908f92', fontWeight: 700 }}>{row.code}.</span> {row.factor}
                    </td>
                    <td style={{ textAlign: 'center', color: '#46464a', fontWeight: 500 }}>{row.bobot}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{
                        background: row.rating >= 3 ? '#d4f2e3' : '#fecbca',
                        color: row.rating >= 3 ? '#27ae60' : '#e74c3c',
                        borderRadius: '4px', padding: isModal ? '0.2rem 0.5rem' : '0.1rem 0.3rem', fontWeight: 700, fontSize: isModal ? '0.85rem' : '0.55rem'
                      }}>{row.rating}</span>
                    </td>
                    <td style={{ textAlign: 'center', color: '#212125', fontWeight: 700 }}>{row.skor.toFixed(2)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr style={{ background: '#212125' }}>
              <td colSpan={3} style={{ padding: isModal ? '0.3rem 0.6rem' : '0.15rem 0.4rem', color: '#ffffff', fontWeight: 700, fontSize: isModal ? '0.9rem' : '0.6rem' }}>TOTAL</td>
              <td style={{ textAlign: 'center', color: '#db991d', fontWeight: 800, fontSize: isModal ? '1.1rem' : '0.7rem' }}>
                {groups.flatMap(g => g.rows).reduce((acc, r) => acc + r.skor, 0).toFixed(1)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function SwotKuantifikasi() {
  const [selectedId, setSelectedId] = useState(null)
  const [hoveredCell, setHoveredCell] = useState(null)

  const renderContent = (id, isModal) => {
    if (id === 'ifas-efas') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: isModal ? '1.5rem' : '0.75rem', height: '100%' }}>
          <ScoreTable
            title="IFAS (Internal Factor Analysis Summary) — Internal"
            color="#361edb"
            groups={[
              { label: '▲ Kekuatan (Strengths)', rows: ifasData.strengths },
              { label: '▼ Kelemahan (Weaknesses)', rows: ifasData.weaknesses },
            ]}
            isModal={isModal}
          />
          <div style={{ height: '1px', background: '#f2f2f2', margin: '0 0.5rem' }} />
          <ScoreTable
            title="EFAS (External Factor Analysis Summary) — Eksternal"
            color="#db991d"
            groups={[
              { label: '▲ Peluang (Opportunities)', rows: efasData.opportunities },
              { label: '▼ Ancaman (Threats)', rows: efasData.threats },
            ]}
            isModal={isModal}
          />
        </div>
      )
    }

    if (id === 'ie-matrix') {
      const getCategory = (n) => {
        if (['I','II','IV'].includes(n)) return 'Grow & Build';
        if (['III','V','VII'].includes(n)) return 'Hold & Maintain';
        return 'Harvest / Divest';
      };

      const getCategoryColor = (n) => {
        if (['I','II','IV'].includes(n)) return '#27ae60'; // Green
        if (['III','V','VII'].includes(n)) return '#db991d'; // Yellow
        return '#e74c3c'; // Red
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ color: '#361edb', fontWeight: 800, fontSize: isModal ? '1.2rem' : '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: isModal ? '1rem' : '0.5rem', textAlign: 'center' }}>
            IE Matrix (Internal-External Matrix)
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, paddingBottom: isModal ? '1rem' : '0' }}>
            
            {/* IFAS Label (Top Centered) */}
            {isModal && (
              <div style={{ 
                color: '#361edb', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em',
                marginBottom: '3rem', textAlign: 'center'
              }}>
                IFAS
              </div>
            )}

            <div style={{ position: 'relative' }}>
              
              {/* EFAS Label (Left Rotated) */}
              {isModal && (
                <div style={{ 
                  position: 'absolute',
                  left: '-115px',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-90deg)',
                  color: '#361edb', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em'
                }}>
                  EFAS
                </div>
              )}

              {/* Y-Axis Labels (Absolute Positioning to avoid pushing center) */}
              {isModal && ['Tinggi\n(3.0 - 4.0)', 'Menengah\n(2.0 - 2.99)', 'Rendah\n(1.0 - 1.99)'].map((label, idx) => (
                <div key={`y-${idx}`} style={{ 
                  position: 'absolute', left: '-100px', top: `${idx * 120 + 55}px`, 
                  transform: 'translateY(-50%)', textAlign: 'right', width: '90px', 
                  color: '#908f92', fontSize: '0.65rem', fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.3
                }}>
                  {label}
                </div>
              ))}

              {/* X-Axis Labels (Absolute Positioning) */}
              {isModal && ['Kuat\n(3.0 - 4.0)', 'Rata-rata\n(2.0 - 2.99)', 'Lemah\n(1.0 - 1.99)'].map((label, idx) => (
                <div key={`x-${idx}`} style={{ 
                  position: 'absolute', top: '-45px', left: `${idx * 120 + 55}px`, 
                  transform: 'translateX(-50%)', textAlign: 'center', width: '100px',
                  color: '#908f92', fontSize: '0.65rem', fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.3
                }}>
                  {label}
                </div>
              ))}

              {/* 3x3 Matrix Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isModal ? 'repeat(3, 110px)' : 'repeat(3, 1fr)', 
                gridTemplateRows: isModal ? 'repeat(3, 110px)' : 'repeat(3, 1fr)',
                gap: isModal ? '10px' : '6px',
                aspectRatio: isModal ? 'auto' : '1/1'
              }}>
                {[
                  { n: 'I', active: false }, { n: 'II', active: false }, { n: 'III', active: false },
                  { n: 'IV', active: false }, { n: 'V', active: true }, { n: 'VI', active: false },
                  { n: 'VII', active: false }, { n: 'VIII', active: false }, { n: 'IX', active: false },
                ].map((cell) => {
                  const isHovered = hoveredCell === cell.n;
                  const catColor = getCategoryColor(cell.n);
                  
                  return (
                    <motion.div 
                      key={cell.n} 
                      onMouseEnter={() => setHoveredCell(cell.n)}
                      onMouseLeave={() => setHoveredCell(null)}
                      whileHover={{ scale: isModal ? 1.05 : 1 }}
                      style={{
                        width: '100%', height: '100%',
                        background: cell.active ? '#db991d' : isHovered ? `${catColor}15` : '#f8f8fb',
                        borderRadius: isModal ? '12px' : '8px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        color: cell.active ? '#ffffff' : isHovered ? catColor : '#908f92',
                        fontWeight: cell.active || isHovered ? 800 : 600,
                        fontSize: isModal ? '1.5rem' : '0.9rem',
                        boxShadow: cell.active ? '0 4px 12px rgba(219,153,29,0.4)' : isHovered ? `inset 0 0 0 2px ${catColor}` : 'inset 0 0 0 1px #f2f2f2',
                        cursor: isModal ? 'pointer' : 'default',
                        transition: 'background 0.2s, color 0.2s'
                      }}
                    >
                      <div>{cell.n}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: isModal ? '1rem' : '1rem', textAlign: 'center', background: '#fdfaee', padding: isModal ? '1.25rem' : '0.75rem', borderRadius: '8px', border: '1px solid #f9eed3', minHeight: isModal ? '210px' : 'auto', display: 'flex', flexDirection: 'column' }}>
            <div>
              <span style={{ color: '#db991d', fontWeight: 800, fontSize: isModal ? '1.2rem' : '0.75rem' }}>
                {isModal && hoveredCell ? `Cell ${hoveredCell}` : 'Cell V'}
              </span>
              <span style={{ color: '#46464a', fontSize: isModal ? '1.1rem' : '0.7rem', fontWeight: 700, marginLeft: '0.4rem' }}>
                {isModal && hoveredCell ? `— "${getCategory(hoveredCell)}"` : '— "Hold & Maintain"'}
              </span>
            </div>
            
            <div style={{ visibility: (!isModal || !hoveredCell || hoveredCell === 'V') ? 'visible' : 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ color: '#908f92', fontSize: isModal ? '0.85rem' : '0.55rem', marginTop: '0.4rem', lineHeight: 1.4 }}>Strategi: Penetrasi Pasar & Pengembangan Produk</p>
              
              {isModal && (
                <p style={{ color: '#6b6b6e', fontSize: '0.75rem', marginTop: '0.75rem', lineHeight: 1.5, maxWidth: '80%', marginInline: 'auto' }}>
                  <strong>Kalkulasi Titik Temu:</strong> IFE ({ieMatrix.ife}) masuk rentang Rata-rata (2.0-2.99), dan EFE ({ieMatrix.efe}) masuk rentang Menengah (2.0-2.99). Pertemuan kedua sumbu matriks ini jatuh akurat pada Sel V.
                </p>
              )}

              <div style={{ display: 'flex', justifyContent: 'center', gap: isModal ? '4rem' : '2rem', marginTop: 'auto', borderTop: '1px solid #f9eed3', paddingTop: isModal ? '0.75rem' : '0.6rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#361edb', fontWeight: 800, fontSize: isModal ? '1.4rem' : '0.85rem' }}>{ieMatrix.ife}</div>
                  <div style={{ color: '#908f92', fontSize: isModal ? '0.85rem' : '0.55rem', fontWeight: 500 }}>IFE Score</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#db991d', fontWeight: 800, fontSize: isModal ? '1.4rem' : '0.85rem' }}>{ieMatrix.efe}</div>
                  <div style={{ color: '#908f92', fontSize: isModal ? '0.85rem' : '0.55rem', fontWeight: 500 }}>EFE Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (id === 'sfas-total') {
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: isModal ? '0.9rem' : '0.55rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem', textAlign: 'center' }}>
            SFAS (Strategic Factor Analysis Summary) Total Score
          </div>
          <div style={{ color: '#db991d', fontWeight: 800, fontSize: isModal ? '3.5rem' : '1.75rem', lineHeight: 1.1, textAlign: 'center' }}>{sfasTotal}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: isModal ? '1rem' : '0.6rem', marginTop: '0.2rem', textAlign: 'center' }}>
            5 Faktor Kunci Strategis
          </div>
          <div style={{ marginTop: isModal ? '1.5rem' : '0.6rem', display: 'flex', flexDirection: 'column', gap: isModal ? '0.6rem' : '0.25rem' }}>
            {sfasData.map(s => (
              <div key={s.code} style={{
                background: 'rgba(255,255,255,0.07)', borderRadius: '6px',
                padding: isModal ? '0.6rem 1rem' : '0.25rem 0.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isModal ? '1rem' : '0.55rem' }}>({s.code}) {s.factor}</span>
                <span style={{ color: '#db991d', fontWeight: 700, fontSize: isModal ? '1.1rem' : '0.6rem', marginLeft: '0.5rem', flexShrink: 0 }}>{s.skor.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (id === 'tows-strategies') {
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#db991d', fontWeight: 800, fontSize: isModal ? '1.1rem' : '0.65rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: isModal ? '1rem' : '0.5rem' }}>
            TOWS (Threats-Opportunities-Weaknesses-Strengths) Strategies Overview
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isModal ? '0.8rem' : '0.4rem', flex: 1, paddingRight: '0.2rem' }}>
            {Object.entries(towsStrategies).flatMap(([type, strategies]) => 
              strategies.map((s, idx) => (
                <div key={`${type}-${idx}`} style={{ display: 'flex', gap: isModal ? '1rem' : '0.4rem', alignItems: 'flex-start', background: '#f8f8fb', padding: isModal ? '1rem' : '0.4rem', borderRadius: '6px' }}>
                  <div style={{ 
                    background: type === 'so' ? '#361edb' : type === 'wo' ? '#db991d' : type === 'st' ? '#e74c3c' : '#212125', 
                    color: 'white', fontSize: isModal ? '1rem' : '0.5rem', fontWeight: 800, padding: isModal ? '0.3rem 0.6rem' : '0.15rem 0.25rem', borderRadius: '4px', textTransform: 'uppercase', flexShrink: 0 
                  }}>
                    {type}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#212125', fontSize: isModal ? '1.1rem' : '0.55rem', fontWeight: 700, marginBottom: isModal ? '0.4rem' : '0.15rem' }}>{s.codes}</div>
                    <div style={{ color: '#6b6b6e', fontSize: isModal ? '1rem' : '0.52rem', lineHeight: 1.4 }}>{s.strategy}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '4px', height: '24px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #ed4544)' }} />
              <h1 className="title-md" style={{ color: '#212125' }}>Kuantifikasi SWOT &mdash; IFAS, EFAS, IE Matrix &amp; TOWS</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}
          style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 0.75fr 1fr', gap: '1rem', minHeight: 0 }}
        >
          {/* Column 1: IFAS & EFAS Container */}
          <motion.div 
            layoutId="ifas-efas"
            onClick={() => setSelectedId('ifas-efas')}
            whileHover={{ scale: 1.01, boxShadow: '0 8px 24px rgba(54,30,219,0.1)', zIndex: 10 }}
            whileTap={{ scale: 0.99 }}
            style={{ 
              background: '#ffffff', borderRadius: '14px', padding: '1rem', 
              boxShadow: '0 2px 10px rgba(54,30,219,0.07)', 
              display: 'flex', flexDirection: 'column',
              position: 'relative', 
              alignSelf: 'center', cursor: 'pointer'
            }}
          >
            {/* Arrow indicating flow to IE Matrix */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-1.15rem',
              transform: 'translateY(-50%)',
              width: '2.5rem',
              height: '2.5rem',
              background: '#f8f8fb',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(54,30,219,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10,
              border: '2px solid #ffffff'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11H16V7L22 12L16 17V13H4V11Z" fill="#361edb"/>
              </svg>
            </div>
            {renderContent('ifas-efas', false)}
          </motion.div>

          {/* Column 2: IE Matrix */}
          <motion.div 
            layoutId="ie-matrix"
            onClick={() => setSelectedId('ie-matrix')}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(54,30,219,0.1)', zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              background: '#ffffff', borderRadius: '14px', padding: '1rem', 
              boxShadow: '0 2px 10px rgba(54,30,219,0.07)', display: 'flex', flexDirection: 'column',
              alignSelf: 'center', cursor: 'pointer'
            }}
          >
            {renderContent('ie-matrix', false)}
          </motion.div>

          {/* Column 3: SFAS Total & TOWS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: 0 }}>
            <motion.div
              layoutId="sfas-total"
              onClick={() => setSelectedId('sfas-total')}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(13,8,48,0.3)', zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #0d0830, #1a0f6e)',
                borderRadius: '14px', padding: '0.875rem', cursor: 'pointer'
              }}
            >
              {renderContent('sfas-total', false)}
            </motion.div>

            <motion.div 
              layoutId="tows-strategies"
              onClick={() => setSelectedId('tows-strategies')}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(54,30,219,0.1)', zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: '#ffffff', borderRadius: '14px', padding: '0.875rem', 
                boxShadow: '0 2px 10px rgba(54,30,219,0.07)', flex: 1, display: 'flex', 
                flexDirection: 'column', overflow: 'hidden', cursor: 'pointer' 
              }}
            >
              {renderContent('tows-strategies', false)}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.4rem' }}
        >
          <span style={{ color: '#908f92', fontSize: '0.57rem', fontStyle: 'italic' }}>
            Adaptasi: Wheelen &amp; Hunger (2012) · Popescu &amp; Scarlat (2015) · Budiarso dkk. (2025)
          </span>
          <span style={{ color: '#908f92', fontSize: '0.57rem' }}>
            Sumber: Tabel 3.4–3.8, Olahan Penulis 2026
          </span>
        </motion.div>

        {/* Modal Overlay / Click State */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 100,
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: selectedId === 'sfas-total' ? 'linear-gradient(135deg, #0d0830, #1a0f6e)' : '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  maxWidth: selectedId === 'ie-matrix' ? '600px' : '900px', 
                  width: '100%',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.15), 0 0 40px rgba(54,30,219,0.1)`,
                  cursor: 'default',
                }}
              >
                {renderContent(selectedId, true)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
