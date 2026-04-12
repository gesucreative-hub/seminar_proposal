import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, Lightbulb, BarChart2, Target, ShieldCheck, Rocket, Users, Wallet, Banknote } from 'lucide-react'
import { leanCanvasData as lc } from '../data/leanCanvasData'
import SlideLayout from '../components/SlideLayout'

const iconMap = {
  problem: AlertCircle,
  solution: Lightbulb,
  keyMetrics: BarChart2,
  uvp: Target,
  unfairAdvantage: ShieldCheck,
  channels: Rocket,
  customerSegments: Users,
  costStructure: Wallet,
  revenueStreams: Banknote
}

function Box({ data, style = {}, onClick, layoutId }) {
  const Icon = iconMap[layoutId]
  
  return (
    <motion.div
      layoutId={layoutId}
      onClick={() => onClick(data, layoutId)}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: data.color,
        borderRadius: '8px',
        border: `2px solid ${data.borderColor}`,
        padding: '0.75rem 0.85rem',
        display: 'flex', flexDirection: 'column', gap: '0.4rem',
        overflow: 'hidden',
        boxShadow: data.highlight ? `0 0 16px ${data.borderColor}55` : 'none',
        cursor: 'pointer',
        ...style,
      }}>
      <div style={{
        color: data.borderColor, fontSize: '0.6rem', fontWeight: 700,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        borderBottom: `1px solid ${data.borderColor}44`,
        paddingBottom: '0.3rem', marginBottom: '0.25rem',
        display: 'flex', alignItems: 'center', gap: '0.4rem'
      }}>
        {Icon && <Icon size={14} strokeWidth={2.5} />}
        <span>{data.label}</span>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {data.items.map((item, i) => (
          <li key={i} style={{
            color: '#212125', fontSize: '0.75rem', lineHeight: 1.45,
            display: 'flex', gap: '0.4rem', alignItems: 'flex-start',
          }}>
            <span style={{ color: data.borderColor, flexShrink: 0, marginTop: '0.15rem' }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function LeanCanvas() {
  const [selectedData, setSelectedData] = useState(null)

  const handleSelect = (data, layoutId) => {
    setSelectedData({ data, layoutId })
  }

  const handleClose = () => {
    setSelectedData(null)
  }

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '2.75rem clamp(1.5rem, 6vw, 5rem) 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ marginBottom: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '4px', height: '24px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #54c980)' }} />
                <h1 className="title-md" style={{ color: '#212125' }}>Model Bisnis · Lean Canvas</h1>
              </div>
            </div>
        </motion.div>

        {/* Canvas Grid Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}
        >
          {/* Top Section */}
          <div style={{
             display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(2, 1fr)',
             gap: '6px', flex: 1.5
          }}>
            <Box layoutId="problem" data={lc.problem} onClick={handleSelect} style={{ gridColumn: '1', gridRow: '1 / 3' }} />
            
            <Box layoutId="solution" data={lc.solution} onClick={handleSelect} style={{ gridColumn: '2', gridRow: '1' }} />
            <Box layoutId="keyMetrics" data={lc.keyMetrics} onClick={handleSelect} style={{ gridColumn: '2', gridRow: '2' }} />
            
            <Box layoutId="uvp" data={lc.uvp} onClick={handleSelect} style={{ gridColumn: '3', gridRow: '1 / 3', boxShadow: `0 0 20px ${lc.uvp.borderColor}44` }} />
            
            <Box layoutId="unfairAdvantage" data={lc.unfairAdvantage} onClick={handleSelect} style={{ gridColumn: '4', gridRow: '1' }} />
            <Box layoutId="channels" data={lc.channels} onClick={handleSelect} style={{ gridColumn: '4', gridRow: '2' }} />
            
            <Box layoutId="customerSegments" data={lc.customerSegments} onClick={handleSelect} style={{ gridColumn: '5', gridRow: '1 / 3' }} />
          </div>

          {/* Bottom Section - MADE HIGHER */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', flex: 1 }}>
            <Box layoutId="costStructure" data={lc.costStructure} onClick={handleSelect} />
            <Box layoutId="revenueStreams" data={lc.revenueStreams} onClick={handleSelect} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ color: '#908f92', fontSize: '0.6rem', textAlign: 'right', paddingTop: '0.4rem' }}>
          Referensi: Ash Maurya — Running Lean (2012) · Olahan Penulis, 2026
        </motion.div>

        {/* Modal Overlay / Click State */}
        <AnimatePresence>
          {selectedData && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 100,
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={handleClose}
            >
              <motion.div
                layoutId={selectedData.layoutId}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: selectedData.data.color,
                  borderRadius: '16px',
                  border: `3px solid ${selectedData.data.borderColor}`,
                  padding: '2rem',
                  maxWidth: '500px', width: '100%',
                  display: 'flex', flexDirection: 'column', gap: '1.1rem',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.1), 0 0 40px ${selectedData.data.borderColor}44`,
                  cursor: 'default',
                }}
              >
                <div style={{
                  color: selectedData.data.borderColor, fontSize: '1.1rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  borderBottom: `2px solid ${selectedData.data.borderColor}44`,
                  paddingBottom: '0.6rem',
                  display: 'flex', alignItems: 'center', gap: '0.6rem'
                }}>
                  {(()=>{
                    const ModalIcon = iconMap[selectedData.layoutId];
                    return ModalIcon && <ModalIcon size={22} strokeWidth={2.5} />;
                  })()}
                  <span>{selectedData.data.label}</span>
                </div>
                <ul style={{ margin: 0, padding: '0 0.5rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {selectedData.data.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#212125', fontSize: '1.05rem', lineHeight: 1.55,
                      display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                    }}>
                      <span style={{ color: selectedData.data.borderColor, flexShrink: 0, marginTop: '0.15rem', fontSize: '1.2rem' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
