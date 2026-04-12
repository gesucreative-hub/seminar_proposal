import { motion } from 'framer-motion'
import { Search, Link2, LayoutGrid, ArrowRight } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'

const pairs = [
  {
    icon: Search,
    iconColor: '#361edb',
    iconBg: '#dedaf9',
    problem: 'Bagaimana merancang marketplace agregator "Gelamang" menggunakan kerangka Lean Canvas untuk mendisrupsi fragmentasi informasi pariwisata lokal?',
    goalCode: 'T1',
    goalTitle: 'Validasi Model Bisnis',
    goalDesc: 'Menghasilkan rancang bangun bisnis rintisan yang terstruktur melalui pengaplikasian sembilan blok Lean Canvas.',
  },
  {
    icon: Link2,
    iconColor: '#db991d',
    iconBg: '#fff3c4',
    problem: 'Bagaimana strategi mengintegrasikan produk vendor lokal ke dalam platform secara efektif?',
    goalCode: 'T2',
    goalTitle: 'Integrasi Rantai Pasok',
    goalDesc: 'Merumuskan taktik akuisisi B2B (Bisnis ke Bisnis) yang mampu mengintegrasikan layanan mitra tanpa membebani mereka dengan kerumitan teknis.',
  },
  {
    icon: LayoutGrid,
    iconColor: '#54c980',
    iconBg: '#d4f2e3',
    problem: 'Bagaimana memfasilitasi wisatawan dalam menemukan dan bertransaksi wisata secara terpusat?',
    goalCode: 'T3',
    goalTitle: 'Optimalisasi Operasional',
    goalDesc: 'Menyusun cetak biru operasional pemasaran untuk mewujudkan kemudahan reservasi wisata secara satu pintu.',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const row = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function RumusanMasalah() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #db991d)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Rumusan Masalah & Tujuan</h1>
            </div>
          </div>
        </motion.div>

        {/* Column headers */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', marginBottom: '0.75rem', paddingLeft: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#361edb' }} />
            <span style={{ color: '#361edb', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Rumusan Masalah</span>
          </div>
          <div style={{ width: '2rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#db991d' }} />
            <span style={{ color: '#db991d', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tujuan Penelitian</span>
          </div>
        </motion.div>

        {/* Pairs */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
        >
          {pairs.map((pair, i) => {
            const Icon = pair.icon
            return (
              <motion.div key={i} variants={row}
                style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'stretch' }}
              >
                {/* Problem */}
                <div style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '1rem 1.1rem',
                  boxShadow: `0 2px 10px ${pair.iconColor}10`,
                  display: 'flex', flexDirection: 'column', gap: '0.4rem',
                  borderLeft: `3px solid ${pair.iconColor}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      background: pair.iconBg, color: pair.iconColor,
                      borderRadius: '6px', padding: '0.1rem 0.45rem',
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                    }}>
                      P{i + 1}
                    </span>
                  </div>
                  <p className="body-small" style={{ color: '#46464a', lineHeight: 1.55 }}>{pair.problem}</p>
                </div>

                {/* Arrow */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 0.25rem' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #361edb, #db991d)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(54,30,219,0.25)',
                  }}>
                    <ArrowRight size={14} color="#ffffff" />
                  </div>
                </div>

                {/* Goal */}
                <div style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '1rem 1.1rem',
                  boxShadow: '0 2px 10px rgba(219,153,29,0.08)',
                  display: 'flex', flexDirection: 'column', gap: '0.3rem',
                  borderLeft: `3px solid ${pair.iconColor}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      background: pair.iconBg, color: pair.iconColor,
                      borderRadius: '6px', padding: '0.1rem 0.45rem',
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                    }}>
                      {pair.goalCode}
                    </span>
                    <span className="title-sm" style={{ color: '#212125' }}>{pair.goalTitle}</span>
                  </div>
                  <p className="body-small" style={{ color: '#6b6b6e', lineHeight: 1.55 }}>{pair.goalDesc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Batasan Penelitian footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          style={{
            marginTop: '0.875rem',
            background: 'linear-gradient(135deg, rgba(54,30,219,0.06), rgba(219,153,29,0.04))',
            border: '1px solid rgba(54,30,219,0.15)',
            borderRadius: '10px', padding: '0.6rem 1rem',
            display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#361edb', fontWeight: 700, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>
            Batasan Penelitian
          </span>
          {[
            { label: 'Cakupan Geografis', value: 'Pulau Lombok, NTB' },
            { label: 'Segmen', value: 'Vendor UMKM Lokal (B2B) & FIT / Wisatawan Mandiri (B2C)' },
            { label: 'Metode', value: 'Mixed Methods (Kualitatif & Kuantitatif)' },
            { label: 'Kerangka', value: 'Lean Canvas (Maurya, 2012)' },
          ].map((b) => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ color: '#908f92', fontSize: '0.58rem' }}>{b.label}:</span>
              <span style={{ color: '#212125', fontSize: '0.62rem', fontWeight: 600 }}>{b.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
