import { motion } from 'framer-motion'
import { FlaskConical, MessageSquare, BarChart2, Eye, Users, ShoppingBag } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'

const techniques = [
  {
    icon: MessageSquare,
    color: '#361edb',
    bg: '#dedaf9',
    title: 'Wawancara Semi-Terstruktur',
    desc: 'Menguji blok Problem, Solution, dan UVP melalui diskusi mendalam bersama Key Opinion Leaders (KOL), Pokdarwis, dan pengadopsi awal.',
    citation: 'DiCicco-Bloom & Crabtree (2006) · Panduan: Lampiran I',
  },
  {
    icon: BarChart2,
    color: '#db991d',
    bg: '#fff3c4',
    title: 'Survei Terstruktur',
    desc: 'Didistribusikan kepada sampel wisatawan untuk mengukur purchase intent dan price elasticity guna memvalidasi blok Customer Segment & Key Metrics.',
    citation: 'Kotler & Keller (2016) · Blok: Customer Segments, Key Metrics',
  },
  {
    icon: Eye,
    color: '#54c980',
    bg: '#d4f2e3',
    title: 'Observasi & Kajian Dokumen',
    desc: 'Pengamatan langsung terhadap inefisiensi OTA eksisting di pasar & kajian literatur strategis terkait Smart Tourism.',
    citation: 'Kawulich (2005) · Bowen (2009) · Barnett-Page & Thomas (2009)',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

export default function MetodologiPenelitian() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #db991d, #eab308)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Metodologi Penelitian</h1>
            </div>
          </div>
        </motion.div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.25rem' }}>
          {/* Left: Approach overview */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} style={{ alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Mixed Methods — prominent standalone label above card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #db991d, #c47c0a)',
                borderRadius: '12px',
                padding: '0.55rem 1.1rem',
                display: 'flex', alignItems: 'center', gap: '0.55rem',
                boxShadow: '0 4px 16px rgba(219,153,29,0.35)',
              }}>
                <FlaskConical size={20} color="#ffffff" />
                <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.01em' }}>Mixed Methods</span>
              </div>
              <span style={{ color: '#908f92', fontSize: '0.65rem', fontStyle: 'italic' }}>Pendekatan penelitian campuran</span>
            </div>
            <div style={{
              background: 'linear-gradient(160deg, #0d0830, #1a0f6e)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              color: '#ffffff',
            }}>
              <p className="body-small" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                Memvalidasi asumsi pada 9 blok Lean Canvas secara empiris dan sistematis.
              </p>
              <div style={{
                background: 'rgba(219,153,29,0.15)', border: '1px solid rgba(219,153,29,0.3)',
                borderRadius: '8px', padding: '0.5rem 0.75rem',
              }}>
                <div style={{ color: '#db991d', fontSize: '0.6rem', fontWeight: 700, marginBottom: '0.15rem' }}>Framework Metodologi</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.65rem' }}>Sugiyono (2017) — Metode Penelitian Kuantitatif, Kualitatif & R&D</div>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />

              {/* Source types */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Sumber Data Utama
                </div>
                  <div style={{ background: 'rgba(219,153,29,0.15)', border: '1px solid rgba(219,153,29,0.3)',
                    borderRadius: '12px', padding: '0.75rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                  }}>
                    <Users size={18} color="#db991d" />
                    <div>
                      <div style={{ color: '#db991d', fontWeight: 600, fontSize: '0.82rem' }}>B2C</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.68rem' }}>FIT Wisatawan domestik / mancanegara di Lombok</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', marginTop: '0.1rem' }}>Instrumen: Kuesioner purchase intent & price elasticity</div>
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(88,68,225,0.2)', border: '1px solid rgba(88,68,225,0.35)',
                    borderRadius: '12px', padding: '0.75rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                  }}>
                    <ShoppingBag size={18} color="#9b8fed" />
                    <div>
                      <div style={{ color: '#9b8fed', fontWeight: 600, fontSize: '0.82rem' }}>B2B</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.68rem' }}>Pokdarwis, penyedia jasa wisata, pengelola DTW Lokal</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', marginTop: '0.1rem' }}>Instrumen: Pedoman wawancara (Lampiran I)</div>
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Techniques */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
          >
            <motion.div variants={item}>
              <div style={{ color: '#908f92', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Teknik Pengumpulan Data
              </div>
            </motion.div>
            {techniques.map((t, i) => {
              const Icon = t.icon
              return (
                <motion.div key={i} variants={item}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(54,30,219,0.1)' }}
                  style={{
                    background: '#ffffff', borderRadius: '14px',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 10px rgba(54,30,219,0.06)',
                    display: 'flex', gap: '0.875rem', alignItems: 'flex-start',
                    borderLeft: `3px solid ${t.color}`,
                  }}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                    background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={t.color} />
                  </div>
                  <div>
                    <div className="title-sm" style={{ color: '#212125', marginBottom: '0.3rem' }}>{t.title}</div>
                    <p className="body-small" style={{ color: '#6b6b6e', lineHeight: 1.6 }}>{t.desc}</p>
                    <div style={{
                      marginTop: '0.35rem', borderTop: '1px solid #f2f2f4',
                      paddingTop: '0.3rem',
                    }}>
                      <span style={{
                        background: t.bg, color: t.color,
                        borderRadius: '3px', padding: '0.05rem 0.3rem',
                        fontSize: '0.52rem', fontWeight: 700,
                      }}>Referensi</span>{' '}
                      <span style={{ color: '#908f92', fontSize: '0.55rem' }}>{t.citation}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
