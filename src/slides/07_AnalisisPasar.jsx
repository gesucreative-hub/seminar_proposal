import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'

const tiers = [
  {
    id: 'tier-tam',
    label: 'TAM',
    title: 'Total Addressable Market',
    value: '2,5 – 3 Juta',
    unit: 'Kunjungan/Tahun',
    desc: 'Akumulasi wisatawan hotel bintang + non-bintang NTB (~2,095 juta dalam 13 bulan) ditambah estimasi day-trip & kunjungan langsung.',
    derivation: 'Σ Tamu Bintang + Non-Bintang (Jan 2025–Jan 2026) + estimasi day-trip ≈ 2,5–3 Juta',
    source: 'BPS NTB No. 20/03/52/Th.XX, 2026',
    color: '#361edb',
    bg: '#dedaf9',
  },
  {
    id: 'tier-sam',
    label: 'SAM',
    title: 'Serviceable Available Market',
    value: '840.000 – 900.000',
    unit: 'Wisatawan/Tahun',
    desc: 'Free Independent Travelers (FIT) setelah eksklusi ~40% segmen korporat & paket all-inclusive yang tidak dapat dijangkau platform.',
    derivation: 'TAM × 60% (eksklusi korporat & package tour)',
    source: 'Kotler & Keller, 2016; asumsi segmentasi penulis',
    color: '#db991d',
    bg: '#fff3c4',
  },
  {
    id: 'tier-som',
    label: 'SOM',
    title: 'Serviceable Obtainable Market',
    value: '8.400 – 18.000',
    unit: 'Transaksi/Tahun',
    desc: 'Target penetrasi awal 1–2% dari SAM di area KEK Mandalika & DTW Lombok Timur pada tahun pertama operasi.',
    derivation: 'SAM × 1–2% (konservatif) = 8.400–18.000 transaksi',
    source: 'Asumsi penetrasi pasar awal, Olahan Penulis 2026',
    color: '#54c980',
    bg: '#d4f2e3',
  },
]

export default function AnalisisPasar() {
  const [selectedTier, setSelectedTier] = useState(null)

  const renderCardContent = (tier, isModal) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: isModal ? '1rem' : '0.6rem' }}>
        <span style={{
          background: tier.bg, color: tier.color,
          borderRadius: '6px', padding: isModal ? '0.3rem 0.8rem' : '0.15rem 0.55rem',
          fontSize: isModal ? '0.9rem' : '0.65rem', fontWeight: 800, letterSpacing: '0.06em',
        }}>
          {tier.label}
        </span>
        <span className="body-small" style={{ color: '#6b6b6e', fontWeight: 500, fontSize: isModal ? '1rem' : undefined }}>{tier.title}</span>
      </div>
      <div style={{ color: tier.color, fontWeight: 700, fontSize: isModal ? '2.5rem' : 'clamp(1.2rem, 2.5vw, 1.4rem)', lineHeight: 1.2, marginTop: isModal ? '0.5rem' : '0' }}>
        {tier.value}
        <span style={{ fontSize: isModal ? '1.1rem' : '0.75rem', fontWeight: 500, color: '#908f92', marginLeft: '0.35rem' }}>{tier.unit}</span>
      </div>
      <p className="body-small" style={{ color: '#6b6b6e', lineHeight: 1.55, fontSize: isModal ? '1rem' : undefined }}>{tier.desc}</p>

      {/* Derivation & Source */}
      <div style={{ borderTop: '1px solid #f2f2f4', paddingTop: isModal ? '0.8rem' : '0.4rem', marginTop: isModal ? 'auto' : '0', display: 'flex', flexDirection: 'column', gap: isModal ? '0.5rem' : '0.2rem' }}>
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'flex-start' }}>
          <span style={{ color: '#908f92', fontSize: isModal ? '0.85rem' : '0.55rem', flexShrink: 0, marginTop: '0.05rem' }}>📐</span>
          <span style={{ color: '#46464a', fontSize: isModal ? '0.9rem' : '0.57rem', fontFamily: 'monospace', lineHeight: 1.4, background: '#f8f8fa', padding: isModal ? '0.5rem' : '0', borderRadius: '4px' }}>{tier.derivation}</span>
        </div>
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <span style={{
            background: tier.bg, color: tier.color,
            borderRadius: '3px', padding: '0.05rem 0.3rem',
            fontSize: isModal ? '0.75rem' : '0.5rem', fontWeight: 700, flexShrink: 0,
          }}>Sumber</span>
          <span style={{ color: '#908f92', fontSize: isModal ? '0.85rem' : '0.52rem' }}>{tier.source}</span>
        </div>
      </div>
    </>
  )

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #54c980)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Analisis Pasar</h1>
            </div>
          </div>
        </motion.div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '2rem', alignItems: 'center' }}>
          {/* Left: Concentric Circles (TAM SAM SOM) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '380px', 
              aspectRatio: '1', 
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            {tiers.map((tier, i) => {
              const size = i === 0 ? '100%' : i === 1 ? '72%' : '44%';
              const zIndex = i + 1;
              const textTop = i === 2 ? '35%' : '14%';

              return (
                <div key={tier.label} style={{
                  position: 'absolute',
                  bottom: 0,
                  width: size,
                  height: size,
                  zIndex: zIndex,
                }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${tier.color}dd, ${tier.color})`,
                      border: '4px solid #ffffff', 
                      boxShadow: `0 8px 32px ${tier.color}33`,
                      color: '#ffffff',
                      textAlign: 'center',
                      cursor: 'default',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: textTop,
                      left: 0,
                      right: 0,
                      padding: '0 10%',
                      pointerEvents: 'none',
                    }}>
                      <div style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: '0.05em', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                        {tier.label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* Right: Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {tiers.map((tier, i) => (
              <motion.div
                layoutId={tier.id}
                key={tier.label}
                onClick={() => setSelectedTier(tier)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, boxShadow: `0 8px 24px ${tier.color}22` }}
                style={{
                  background: '#ffffff', borderRadius: '16px',
                  padding: '1rem 1.25rem',
                  boxShadow: '0 2px 10px rgba(54,30,219,0.07)',
                  borderLeft: `4px solid ${tier.color}`,
                  display: 'flex', flexDirection: 'column', gap: '0.3rem',
                  cursor: 'pointer'
                }}
              >
                {renderCardContent(tier, false)}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Overlay / Click State */}
        <AnimatePresence>
          {selectedTier && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 100,
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={() => setSelectedTier(null)}
            >
              <motion.div
                layoutId={selectedTier.id}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  maxWidth: '700px', width: '100%', minHeight: '350px',
                  borderTop: `6px solid ${selectedTier.color}`,
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.15), 0 0 40px ${selectedTier.color}33`,
                  cursor: 'default',
                }}
              >
                {renderCardContent(selectedTier, true)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
