import { motion } from 'framer-motion'
import { ArrowRight, Eye, Compass, CheckCircle, Shield, FileText, Award } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'

const missions = [
  'Mengintegrasikan layanan wisata hiper-lokal ke dalam ekosistem digital yang teroptimasi.',
  'Menyediakan solusi pemasaran bagi vendor B2B tanpa membebani mereka dengan kerumitan infrastruktur teknis IT.',
  'Menghadirkan pengalaman reservasi mandiri (self-service) yang praktis, efisien, dan transparan bagi wisatawan B2C.',
  'Menjadi mitra strategis Pemerintah Daerah NTB dalam mewujudkan akselerasi ekosistem smart tourism.',
]

const legalItems = [
  {
    icon: Shield,
    color: '#361edb',
    bg: '#dedaf9',
    label: 'Badan Hukum',
    value: 'PT Perorangan → PT Reguler (fase modal ventura)',
    desc: 'Pemisahan aset rigid dengan fleksibilitas skalabilitas.',
  },
  {
    icon: FileText,
    color: '#db991d',
    bg: '#fff3c4',
    label: 'Instrumen Legalitas',
    value: 'NIB, NPWP Badan, SKU (Surat Keterangan Usaha), HAKI',
    desc: 'Memproteksi aset merek dari plagiarisme.',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

export default function KonsepBisnis() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.25rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #ed4544)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Konsep Bisnis</h1>
            </div>
          </div>
        </motion.div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Row: Identitas -> Fokus */}
          <motion.div variants={container} initial="hidden" animate="show"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
            
            {/* Identitas Card */}
            <motion.div variants={item} style={{ flex: 1 }}>
              <div style={{
                background: 'linear-gradient(135deg, #0d0830, #1a0f6e)',
                borderRadius: '16px', padding: '1.15rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: '0 8px 24px rgba(13,8,48,0.15)', height: '100%',
              }}>
                <div style={{
                  width: '45px', height: '45px', borderRadius: '12px',
                  background: 'rgba(219,153,29,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Award size={24} color="#db991d" />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Identitas</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.02em', lineHeight: 1.4 }}>
                    Bisnis Rintisan B2B2C — Marketplace Aggregator — Sektor E-Tourism
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connection Arrow */}
            <motion.div variants={item} style={{ flexShrink: 0, padding: '0 0.25rem' }}>
              <ArrowRight size={32} color="#db991d" style={{ opacity: 0.8 }} />
            </motion.div>

            {/* Fokus Card */}
            <motion.div variants={item} style={{ flex: 1 }}>
              <div style={{
                background: 'linear-gradient(135deg, #0d0830, #1a0f6e)',
                borderRadius: '16px', padding: '1.15rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: '0 8px 24px rgba(13,8,48,0.15)', height: '100%',
              }}>
                <div style={{
                  width: '45px', height: '45px', borderRadius: '12px',
                  background: 'rgba(219,153,29,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Compass size={24} color="#db991d" />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Fokus Sentral</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.01em', lineHeight: 1.45 }}>
                    Menghimpun & mengintegrasikan produk daya tarik wisata lokal yang terfragmentasi.
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Middle Row: Grid (Visi/Misi vs Legalitas) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            
            {/* Left Column: Visi & Misi */}
            <motion.div variants={container} initial="hidden" animate="show"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Vision */}
              <motion.div variants={item}>
                <div style={{
                  background: '#ffffff', borderRadius: '14px', padding: '1.25rem',
                  boxShadow: '0 2px 10px rgba(54,30,219,0.06)', borderTop: '4px solid #361edb',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <div style={{ background: '#dedaf9', padding: '0.35rem', borderRadius: '6px' }}>
                      <Eye size={16} color="#361edb" />
                    </div>
                    <span style={{ color: '#361edb', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Visi</span>
                  </div>
                  <p className="body-small" style={{ color: '#212125', fontWeight: 500, lineHeight: 1.6, fontSize: '0.85rem' }}>
                    Mendominasi penetrasi pemasaran pariwisata digital lokal dan berpartisipasi aktif sebagai platform agregator (penghimpun) layanan wisata yang komprehensif, aman, serta terpercaya di Pulau Lombok.
                  </p>
                </div>
              </motion.div>

              {/* Mission - 2x2 Grid */}
              <motion.div variants={item}>
                <div style={{
                  background: '#ffffff', borderRadius: '14px', padding: '1.25rem',
                  boxShadow: '0 2px 10px rgba(84,201,128,0.06)', borderLeft: '4px solid #54c980',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ background: '#d4f2e3', padding: '0.35rem', borderRadius: '6px' }}>
                      <CheckCircle size={16} color="#54c980" />
                    </div>
                    <span style={{ color: '#54c980', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Misi</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {missions.map((m, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{
                          minWidth: '22px', height: '22px', borderRadius: '50%',
                          background: '#d4f2e3', color: '#54c980',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.7rem', fontWeight: 800, marginTop: '0.1rem', flexShrink: 0
                        }}>{i + 1}</span>
                        <p className="body-small" style={{ color: '#46464a', lineHeight: 1.5, fontSize: '0.78rem' }}>{m}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Legalitas */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ color: '#908f92', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '-0.5rem', marginTop: '0.2rem' }}>
                Struktur Hukum & Kepatuhan Legalitas
              </div>
              
              {legalItems.map((l, i) => {
                const Icon = l.icon
                return (
                  <div key={i} style={{
                    background: '#ffffff', borderRadius: '14px', padding: '1.25rem',
                    boxShadow: '0 2px 10px rgba(54,30,219,0.06)', borderRight: `4px solid ${l.color}`,
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
                      background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color={l.color} />
                    </div>
                    <div>
                      <div style={{ color: l.color, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{l.label}</div>
                      <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{l.value}</div>
                      <p className="body-small" style={{ color: '#6b6b6e', fontSize: '0.8rem', lineHeight: 1.5 }}>{l.desc}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Bottom Row: Fase Pengembangan (Centers at absolute Y-bottom) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
            {/* Highlight box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(54,30,219,0.04), rgba(219,153,29,0.04))',
              border: '1px dashed rgba(54,30,219,0.3)',
              borderRadius: '16px', padding: '1.25rem 2rem',
              width: '85%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{ color: '#908f92', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
                Roadmap Fase Pengembangan
              </div>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { phase: 'Fase 1', desc: 'PT Perorangan — Pendanaan Mandiri & MVP (Produk Awal Layak Jual)', color: '#db991d' },
                  { phase: 'Fase 2', desc: 'PT Reguler — Pendanaan Tahap Awal (Seed Funding)', color: '#361edb' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      background: p.color, color: '#fff',
                      borderRadius: '6px', padding: '0.2rem 0.6rem',
                      fontSize: '0.7rem', fontWeight: 800, flexShrink: 0,
                      boxShadow: `0 4px 12px ${p.color}40`
                    }}>{p.phase}</span>
                    <span className="body-small" style={{ color: '#46464a', fontSize: '0.85rem', fontWeight: 600 }}>{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
