import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ResponsiveContainer, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { tamData, wismanData, rlmData } from '../data/marketData'
import SlideLayout from '../components/SlideLayout'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#212125', borderRadius: '10px',
        padding: '0.6rem 0.9rem', border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', marginBottom: '0.3rem' }}>{label}</p>
        {payload.map((entry, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: entry.color }} />
            <span style={{ color: '#fff', fontSize: '0.7rem' }}>
              {entry.name}: <strong>{typeof entry.value === 'number' && entry.value > 100
                ? entry.value.toLocaleString('id-ID')
                : entry.value}</strong>
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function DataPasar() {
  const [selectedId, setSelectedId] = useState(null)

  const renderContent = (id, isModal) => {
    const titleStyle = { color: id === 'chart-4' ? '#db991d' : '#46464a', fontWeight: 600, fontSize: isModal ? '1.1rem' : '0.72rem', marginBottom: isModal ? '1rem' : '0.5rem', textTransform: id === 'chart-4' ? 'uppercase' : 'none', letterSpacing: id === 'chart-4' ? '0.08em' : 'normal' }
    
    // Axis font sizes for recharts
    const tickProps = { fontSize: isModal ? 12 : 9, fill: '#908f92' }

    if (id === 'chart-1') return (
      <>
        <p style={titleStyle}>Tingkat Penghunian Kamar (Orang)</p>
        <ResponsiveContainer width="100%" height={isModal ? "90%" : "85%"}>
          <BarChart data={tamData} margin={{ top: 2, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={tickProps} tickLine={false} />
            <YAxis tick={tickProps} tickFormatter={v => `${(v/1000).toFixed(0)}K`} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconSize={isModal ? 12 : 8} wrapperStyle={{ fontSize: isModal ? '0.85rem' : '0.65rem' }} />
            <Bar dataKey="bintang" name="Hotel Bintang" fill="#361edb" radius={[3, 3, 0, 0]} />
            <Bar dataKey="nonBintang" name="Hotel Non-Bintang" fill="#db991d" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </>
    )

    if (id === 'chart-2') return (
      <>
        <p style={titleStyle}>Jumlah Wisman Melalui BIZAM / BIL Zainuddin Abdul Madjid (orang)</p>
        <ResponsiveContainer width="100%" height={isModal ? "90%" : "85%"}>
          <LineChart data={wismanData} margin={{ top: 2, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={tickProps} tickLine={false} />
            <YAxis tick={tickProps} tickFormatter={v => `${(v/1000).toFixed(0)}K`} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="wisman" name="Wisman" stroke="#361edb" strokeWidth={isModal ? 3.5 : 2.5} dot={{ r: isModal ? 5 : 3, fill: '#361edb' }} activeDot={{ r: isModal ? 7 : 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </>
    )

    if (id === 'chart-3') return (
      <>
        <p style={titleStyle}>Rata-Rata Lama Menginap / RLM (hari)</p>
        <ResponsiveContainer width="100%" height={isModal ? "90%" : "85%"}>
          <LineChart data={rlmData} margin={{ top: 2, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={tickProps} tickLine={false} />
            <YAxis tick={tickProps} domain={[1.3, 2.3]} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconSize={isModal ? 12 : 8} wrapperStyle={{ fontSize: isModal ? '0.85rem' : '0.65rem' }} />
            <Line type="monotone" dataKey="bintang" name="Hotel Bintang" stroke="#361edb" strokeWidth={isModal ? 3.5 : 2.5} dot={{ r: isModal ? 5 : 3 }} />
            <Line type="monotone" dataKey="nonBintang" name="Hotel Non-Bintang" stroke="#db991d" strokeWidth={isModal ? 3.5 : 2.5} dot={{ r: isModal ? 5 : 3 }} strokeDasharray="5 2" />
          </LineChart>
        </ResponsiveContainer>
      </>
    )

    if (id === 'chart-4') return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: isModal ? '1.5rem' : '0.6rem' }}>
        <div style={{ color: '#db991d', fontWeight: 700, fontSize: isModal ? '1rem' : '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          💡 Key Insight — BPS NTB 2026
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: isModal ? '0.8rem' : '0.45rem' }}>
          {[
            { label: 'TPK Jan 2026', value: '21,81%', sub: 'turun dari puncak 44,14% (Jul 2025)', color: '#db991d' },
            { label: 'RLM Bintang Jan 2026', value: '1,50 hari', sub: 'Non-Bintang: 1,65 hari − stagnan', color: '#9b8fed' },
            { label: 'Wisman via BIZAM puncak', value: '10.512 org', sub: 'Juli 2025 — demand internasional ada', color: '#54c980' },
          ].map((ins, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: isModal ? '1rem' : '0.45rem 0.65rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: isModal ? '0.9rem' : '0.62rem', color: 'rgba(255,255,255,0.65)' }}>{ins.label}</span>
                <span style={{ fontWeight: 700, fontSize: isModal ? '1.4rem' : '0.8rem', color: ins.color }}>{ins.value}</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: isModal ? '0.8rem' : '0.55rem', marginTop: '0.2rem' }}>{ins.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: isModal ? '1rem' : '0.45rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: isModal ? '0.95rem' : '0.58rem', lineHeight: 1.5 }}>
            RLM stagnan → wisatawan belum teroptimasi eksplorasi lokal. TPK rendah → vendor kehilangan revenue. Inilah <strong>Pain</strong> yang divalidasi VPC Gelamang.
          </p>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: isModal ? '0.75rem' : '0.52rem', fontStyle: 'italic', marginTop: isModal ? '0.5rem' : 0 }}>
            Sumber: Berita Resmi Statistik BPS NTB No. 20/03/52/Th. XX, 2 Februari 2026
          </span>
        </div>
      </div>
    )

    return null
  }

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '24px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #db991d)' }} />
              <h1 className="title-md" style={{ color: '#212125' }}>Sumber Data Pasar</h1>
            </div>
          </div>
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }}
          style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem' }}
        >
          {['chart-1', 'chart-2', 'chart-3', 'chart-4'].map((id) => (
            <motion.div
              layoutId={id}
              key={id}
              onClick={() => setSelectedId(id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: id === 'chart-4' ? 'linear-gradient(135deg, #0d0830, #1a0f6e)' : '#ffffff',
                borderRadius: '14px', padding: '0.875rem',
                boxShadow: '0 2px 10px rgba(54,30,219,0.07)',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column'
              }}
            >
              {renderContent(id, false)}
            </motion.div>
          ))}
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
                  background: selectedId === 'chart-4' ? 'linear-gradient(135deg, #0d0830, #1a0f6e)' : '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem',
                  maxWidth: '85vw', width: '100%', height: '80dvh',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.15), 0 0 40px rgba(54,30,219,0.1)`,
                  cursor: 'default',
                  border: selectedId === 'chart-4' ? '1px solid rgba(255,255,255,0.1)' : 'none'
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
