import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Shield, Zap } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'
import phoneImg from '../images/gelamang-phone.png'

const highlights = [
  { icon: Globe, color: '#361edb', bg: '#dedaf9', label: 'Identitas', value: 'B2B2C Marketplace Aggregator', sub: 'Startup e-tourism Pulau Lombok' },
  { icon: TrendingUp, color: '#db991d', bg: '#fff3c4', label: 'Model Pendapatan', value: 'Komisi (Take-Rate) 10% dari Total Transaksi (GMV)', sub: 'Tanpa biaya pendaftaran · Tanpa biaya langganan' },
  { icon: Users, color: '#54c980', bg: '#d4f2e3', label: 'Target Awal', value: '10–15 Beta Vendor', sub: 'KEK Mandalika & DTW Lombok Timur' },
  { icon: Zap, color: '#ab82d3', bg: '#ede5f7', label: 'Proposisi Nilai Unik (Unique Value Proposition / UVP)', value: 'Hyper-Local Enabler', sub: 'Shopify × Airbnb untuk akar rumput NTB' },
  { icon: Shield, color: '#ed4544', bg: '#fecbca', label: 'Keunggulan Kompetitif', value: 'Kontrak Eksklusif B2B + MoU Desa', sub: 'Harmonisasi visi Smart Tourism NTB' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

export default function ExecutiveSummary() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', position: 'relative', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.25rem', paddingTop: '1rem', position: 'relative', zIndex: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #db991d)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Executive Summary</h1>
            </div>
          </div>
        </motion.div>

        {/* Main Grid Content */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.25rem' }}>
          {/* Left: Highlight cards */}
          <motion.div variants={container} initial="hidden" animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <motion.div key={h.label} variants={item}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(54,30,219,0.1)' }}
                  style={{
                    background: '#ffffff', borderRadius: '14px',
                    padding: '0.875rem 1.1rem',
                    boxShadow: '0 2px 10px rgba(54,30,219,0.06)',
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    borderLeft: `3px solid ${h.color}`,
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                    background: h.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={h.color} />
                  </div>
                  <div>
                    <div style={{ color: '#908f92', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h.label}</div>
                    <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.88rem', marginTop: '0.1rem' }}>{h.value}</div>
                    <div style={{ color: '#6b6b6e', fontSize: '0.72rem', marginTop: '0.1rem' }}>{h.sub}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Market numbers + next steps */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {/* Market quantification */}
            <div style={{
              background: 'linear-gradient(160deg, #0d0830, #1a0f6e)',
              borderRadius: '16px', padding: '1.1rem', color: '#ffffff',
            }}>
              <div style={{ color: '#db991d', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Kuantifikasi Pasar
              </div>
              {[
                { label: 'TAM', value: '2,5–3 Juta', unit: 'kunjungan/thn', color: '#9b8fed' },
                { label: 'SAM', value: '840–900K', unit: 'wisatawan/thn', color: '#db991d' },
                { label: 'SOM', value: '8.4–18K', unit: 'transaksi/thn', color: '#54c980' },
              ].map((m) => (
                <div key={m.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.68rem' }}>{m.label}</span>
                  <span style={{ textAlign: 'right' }}>
                    <span style={{ color: m.color, fontWeight: 700, fontSize: '0.9rem' }}>{m.value}</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', marginLeft: '0.25rem' }}>{m.unit}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* SWOT score summary */}
            <div style={{ 
              background: '#ffffff', borderRadius: '16px', padding: '1rem', 
              boxShadow: '0 2px 10px rgba(54,30,219,0.07)'
            }}>
              <div style={{ color: '#908f92', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.6rem' }}>
                Skor Analisis Strategis
              </div>
              {[
                { label: 'IFAS (Internal)', score: '2.50', color: '#361edb' },
                { label: 'EFAS (Eksternal)', score: '2.70', color: '#db991d' },
                { label: 'SFAS (Gabungan)', score: '2.85', color: '#54c980' },
              ].map((s) => (
                <div key={s.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.35rem 0', borderBottom: '1px solid #f2f2f2',
                }}>
                  <span className="body-small" style={{ color: '#6b6b6e' }}>{s.label}</span>
                  <span style={{ color: s.color, fontWeight: 800, fontSize: '1rem' }}>{s.score}</span>
                </div>
              ))}
              <p className="body-small" style={{ color: '#908f92', marginTop: '0.5rem', fontStyle: 'italic' }}>
                IE Matrix: Cell V — "Jaga dan Pertahankan" (Hold & Maintain)
              </p>
            </div>

            {/* Sprint timeline mini */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(219,153,29,0.08), rgba(54,30,219,0.06))',
              border: '1px solid rgba(219,153,29,0.25)',
              borderRadius: '12px', padding: '0.875rem'
            }}>
              <div style={{ color: '#db991d', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>
                🗓 Linimasa Pengerjaan (April — Juni 2026)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
                {[
                  { phase: 'Fase 1', period: 'Apr W1–W2', desc: 'Riset Lapangan B2B & Fondasi Sistem', color: '#361edb' },
                  { phase: 'Fase 2', period: 'Apr W3–W4', desc: 'Akuisisi Vendor & Fitur Inti (10–15 Beta)', color: '#db991d' },
                  { phase: 'Fase 3', period: 'Mei W1–W3', desc: 'Validasi B2C & Frontend Storefront', color: '#54c980' },
                  { phase: 'Fase 4', period: 'Mei W3–W4', desc: 'Midtrans Split Payment & Checkout', color: '#ed4544' },
                  { phase: 'Fase 5', period: 'Jun W1–W2', desc: 'Uji Penerimaan Pengguna (User Acceptance Testing / UAT), Deployment & Seminar PA', color: '#9b8fed' },
                ].map(p => (
                  <div key={p.phase} style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span style={{
                      background: p.color, color: '#fff',
                      borderRadius: '3px', padding: '0.05rem 0.35rem',
                      fontSize: '0.52rem', fontWeight: 700, flexShrink: 0,
                    }}>{p.phase}</span>
                    <span style={{ color: '#908f92', fontSize: '0.55rem', flexShrink: 0 }}>{p.period}</span>
                    <span style={{ color: '#46464a', fontSize: '0.6rem', lineHeight: 1.3 }}>{p.desc}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '0.4rem', color: '#908f92', fontSize: '0.52rem', fontStyle: 'italic' }}>
                Sumber: Lampiran III · Tech Stack: Next.js 16 · Supabase · Midtrans · Vercel
              </div>
            </div>
          </motion.div>
        </div>

        {/* Foreground Overlapping Phone Mockup */}
        <motion.img 
          initial={{ y: 200, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          src={phoneImg}
          alt="Gelamang App Preview"
          style={{
            position: 'absolute',
            bottom: '-2.5rem', // Push down deeply to clear the "cutted" edge
            left: '44%',
            height: '80vh',
            objectFit: 'contain',
            filter: 'drop-shadow(0 30px 60px rgba(54,30,219,0.3))',
            transformOrigin: 'bottom center',
            zIndex: 15, // Enforce overlay on top of cards
            pointerEvents: 'none'
          }}
        />

      </div>
    </SlideLayout>
  )
}
