import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { cpmMegaOtaData } from '../data/cpmData'
import SlideLayout from '../components/SlideLayout'

const COLORS = { gelamang: '#361edb', atourin: '#db991d', traveloka: '#54c980' }

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#212125', borderRadius: '10px', padding: '0.6rem 0.9rem',
        border: '1px solid rgba(255,255,255,0.1)', maxWidth: '200px',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', marginBottom: '0.3rem', lineHeight: 1.4 }}>{label}</p>
        {payload.map((entry, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.15rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: entry.color, flexShrink: 0 }} />
            <span style={{ color: '#fff', fontSize: '0.7rem' }}>
              {entry.name}: <strong>{entry.value}</strong>
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const totals = [
  { name: 'Gelamang', total: 2.55, color: '#361edb', note: 'Unggul: Inventaris lokal & kemitraan pemerintah' },
  { name: 'Atourin', total: 2.90, color: '#db991d', note: 'Unggul: Kapabilitas B2B & edukasi mitra' },
  { name: 'Traveloka Xperience', total: 2.95, color: '#54c980', note: 'Unggul: Finansial & brand awareness' },
]

export default function KompetitorAnalisis() {
  const [selectedId, setSelectedId] = useState(null)

  const chartData = cpmMegaOtaData.map(d => ({
    csf: d.csf,
    Gelamang: d.gelamang,
    Atourin: d.atourin,
    Traveloka: d.traveloka,
  }))

  const renderContent = (id, isModal) => {
    if (id === 'cpm-chart') {
      return (
        <div style={{ width: '100%', height: isModal ? '600px' : '100%', display: 'flex', flexDirection: 'column' }}>
          {isModal && (
             <div style={{ color: '#212125', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
               Detailed Competitive Profile Matrix (CPM)
             </div>
          )}
          <div style={{ flex: 1, minHeight: 0, position: 'relative', width: '100%' }}>
            
            {/* Vertical Y-Axis Legend */}
            <div style={{
              position: 'absolute',
              left: isModal ? '20px' : '10px',
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              color: '#361edb', fontWeight: 800, 
              fontSize: isModal ? '0.75rem' : '0.55rem', 
              letterSpacing: '0.15em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              zIndex: 10
            }}>
              Faktor Penentu Keberhasilan Industri
            </div>

            <ResponsiveContainer width="99%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 10, right: 30, left: isModal ? 190 : 150, bottom: 20 }}
                barCategoryGap={isModal ? "25%" : "30%"}
                barGap={isModal ? 6 : 4}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f5" horizontal={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 0.65]} 
                  tick={{ fontSize: isModal ? 12 : 9, fill: '#908f92', fontWeight: 600 }} 
                  tickLine={false} 
                  axisLine={{ stroke: '#ebebee' }} 
                  label={{ value: 'Sumber: Hatzijordanou dkk. (2019) · Tabel 3.9, Olahan Penulis 2026', position: 'insideBottomRight', offset: -10, fill: '#908f92', fontSize: isModal ? 11 : 9, fontStyle: 'italic' }}
                />
                <YAxis
                  type="category" dataKey="csf"
                  tick={{ fontSize: isModal ? 13 : 9, fill: '#46464a', fontWeight: 600, fontFamily: 'Lexend Deca, sans-serif' }}
                  width={isModal ? 150 : 120}
                  tickLine={false} axisLine={{ stroke: '#ebebee' }}
                />
                <Tooltip cursor={{ fill: '#f8f8fa' }} content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="top" 
                  align="center"
                  iconType="circle"
                  iconSize={isModal ? 12 : 8} 
                  wrapperStyle={{ 
                    fontSize: isModal ? '0.9rem' : '0.65rem',
                    paddingBottom: isModal ? '10px' : '5px',
                    fontWeight: 700,
                    color: '#212125'
                  }} 
                />
                <Bar dataKey="Gelamang" name="Gelamang" fill={COLORS.gelamang} radius={[0, 4, 4, 0]} />
                <Bar dataKey="Atourin" name="Atourin" fill={COLORS.atourin} radius={[0, 4, 4, 0]} />
                <Bar dataKey="Traveloka" name="Traveloka" fill={COLORS.traveloka} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    }

    if (id === 'strategi-posisi') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#361edb', fontSize: isModal ? '1.1rem' : '0.6rem', fontWeight: 700, marginBottom: isModal ? '1rem' : '0.35rem' }}>💡 Strategi Posisi Gelamang</div>
          <p style={{ color: '#46464a', fontSize: isModal ? '1.25rem' : '0.63rem', lineHeight: 1.55 }}>
            Traveloka Xperience (2.95) unggul di finansial &amp; brand. Gelamang (2.55) mendominasi <strong>Integrasi Inventaris Akar Rumput</strong> — regulasi internal OTA menghalangi akuisisi vendor mikro. Ini adalah <em style={{ color: '#db991d' }}>ceruk pasar yang sengaja tidak digarap kompetitor.</em>
          </p>
          <div style={{ marginTop: isModal ? '1.5rem' : '0.75rem', color: '#908f92', fontSize: isModal ? '0.9rem' : '0.55rem', fontStyle: 'italic' }}>
            Sumber: Hatzijordanou dkk. (2019) · Tabel 3.9, Olahan Penulis 2026
          </div>
        </div>
      )
    }
  }

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ marginBottom: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '24px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #db991d)' }} />
              <h1 className="title-md" style={{ color: '#212125' }}>Analisis Kompetitor — CPM (Competitive Profile Matrix)</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 0 }}
        >
          {/* Top Row: Total Scores */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {totals.map((t) => (
              <div key={t.name} style={{
                background: '#ffffff', borderRadius: '12px',
                padding: '0.875rem 1.25rem', boxShadow: '0 2px 10px rgba(54,30,219,0.07)',
                borderLeft: `4px solid ${t.color}`,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.2rem' }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: '1.75rem', lineHeight: 1 }}>{t.total}</div>
                  <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.name}</div>
                </div>
                <p className="body-small" style={{ color: '#6b6b6e', marginTop: '0.1rem', lineHeight: 1.45 }}>{t.note}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: CPM Chart & Insights */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 0.35fr', gap: '1rem', minHeight: 0 }}>
            {/* CPM Bar Chart Container */}
            <motion.div 
              layoutId="cpm-chart"
              onClick={() => setSelectedId('cpm-chart')}
              whileHover={{ scale: 1.01, boxShadow: '0 8px 24px rgba(54,30,219,0.1)', zIndex: 10 }}
              whileTap={{ scale: 0.99 }}
              style={{ background: '#ffffff', borderRadius: '14px', padding: '1rem', boxShadow: '0 2px 10px rgba(54,30,219,0.07)', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              {renderContent('cpm-chart', false)}
            </motion.div>

            {/* Right Column: Key Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 0, justifyContent: 'center' }}>
              {/* Competitor categories */}
              <div style={{
                background: '#f8f8fa', borderRadius: '12px', padding: '0.875rem',
                border: '1px solid #ebebee', flexShrink: 0
              }}>
                <div style={{ color: '#908f92', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.6rem' }}>Kategori Kompetitor</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Langsung', names: 'Atourin, Bumi Journey', color: '#ed4544' },
                    { label: 'Tdk Langsung', names: 'Traveloka, Tiket.com', color: '#db991d' },
                    { label: 'Substitusi', names: 'Google Maps, TripAdvisor', color: '#361edb' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{
                        background: `${c.color}15`, color: c.color,
                        borderRadius: '4px', padding: '0.2rem 0.5rem',
                        fontSize: '0.55rem', fontWeight: 700, flexShrink: 0,
                        width: 'auto', minWidth: '85px', textAlign: 'center', whiteSpace: 'nowrap'
                      }}>{c.label}</span>
                      <span style={{ color: '#6b6b6e', fontSize: '0.65rem', fontWeight: 500 }}>{c.names}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Insight */}
              <motion.div 
                layoutId="strategi-posisi"
                onClick={() => setSelectedId('strategi-posisi')}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(54,30,219,0.1)', zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(54,30,219,0.05), rgba(219,153,29,0.08))',
                  border: '1px solid rgba(54,30,219,0.15)',
                  borderRadius: '12px', padding: '1rem', flexShrink: 0, cursor: 'pointer'
                }}
              >
                {renderContent('strategi-posisi', false)}
              </motion.div>
            </div>
          </div>
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
                  background: selectedId === 'strategi-posisi' ? 'linear-gradient(135deg, #f8f8fb, #fdfaee)' : '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  maxWidth: selectedId === 'cpm-chart' ? '1200px' : '700px', 
                  width: '100%',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.15), 0 0 40px rgba(54,30,219,0.1)`,
                  cursor: 'default',
                  border: selectedId === 'strategi-posisi' ? '1px solid rgba(54,30,219,0.15)' : 'none',
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
