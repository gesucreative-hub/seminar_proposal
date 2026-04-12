import { motion } from 'framer-motion'
import { Zap, MapPin, AlertTriangle, Target } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'

const cards = [
  {
    icon: Zap,
    color: '#db991d',
    bg: '#fff3c4',
    tag: '01',
    title: 'Akselerasi Smart Tourism',
    desc: 'Pergeseran paradigma menuju digital tourism yang selaras dengan inisiatif kebijakan Pemprov NTB untuk menjangkau pasar global.',
    citations: [
      { ref: 'UU No. 10/2009', detail: 'Definisi pariwisata sebagai sektor strategis nasional' },
      { ref: 'BPS NTB, 2026', detail: 'TPK (Tingkat Penghunian Kamar) Lombok: peluang peningkatan dari 21,81% (Jan 2026)' },
      { ref: 'Apriani dkk., 2025', detail: 'Kebijakan Smart Tourism NTB' },
    ],
  },
  {
    icon: MapPin,
    color: '#ed4544',
    bg: '#fecbca',
    tag: '02',
    title: 'Fragmentasi Pemasaran Lokal',
    desc: 'Promosi oleh pengelola DTW (Daya Tarik Wisata) masih sporadis & terfragmentasi, menciptakan asimetri informasi yang menyulitkan pencarian terpusat bagi wisatawan.',
    citations: [
      { ref: 'Buhalis & Law, 2008', detail: 'Paradigma e-tourism: information quality sebagai kunci' },
      { ref: 'Komalasari dkk., 2020', detail: 'Gap pemasaran digital UMKM wisata lokal' },
      { ref: 'Afriansyah dkk., 2025', detail: 'Literasi digital rendah vendor wisata' },
    ],
  },
  {
    icon: AlertTriangle,
    color: '#361edb',
    bg: '#dedaf9',
    tag: '03',
    title: 'Kesenjangan Infrastruktur Vendor',
    desc: 'Rendahnya literasi teknologi & keterbatasan modal (Capital Expenditure) membebankan pengelola lokal, sehingga berisiko kalah bersaing dengan dominasi OTA (Online Travel Agent) multinasional.',
    citations: [
      { ref: 'RLM (Rata-Rata Lama Menginap): 1,50 hari (BPS NTB, Jan 2026)', detail: 'Wisatawan tidak teroptimasi mengeksplorasi destinasi lokal' },
      { ref: 'Afriansyah dkk., 2025', detail: 'Vendor tidak punya modal awal (Capital Expenditure) untuk membangun sistem reservasi mandiri' },
    ],
  },
  {
    icon: Target,
    color: '#54c980',
    bg: '#d4f2e3',
    tag: '04',
    title: 'Intervensi Strategis — "Gelamang"',
    desc: 'Perancangan marketplace agregator B2B2C (Bisnis ke Bisnis ke Konsumen) berbasis Lean Canvas untuk mengonsolidasikan layanan wisata lokal dalam satu ekosistem digital terpadu.',
    citations: [
      { ref: 'Maurya, 2012', detail: 'Lean Canvas — 9 blok validasi asumsi bisnis' },
      { ref: 'Blank & Dorf, 2020', detail: 'Customer Discovery sebagai pondasi startup' },
      { ref: 'Rahayu dkk., 2023', detail: 'Lean Canvas untuk UMKM digital' },
    ],
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function LatarBelakang() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.25rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #db991d)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Latar Belakang</h1>
            </div>
          </div>
        </motion.div>

        {/* 4-Column Vertical Pillars Grid */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {cards.map((card, index) => {
            return (
              <motion.div key={card.tag} variants={item}
                whileHover={{ y: index % 2 !== 0 ? 'calc(3.5rem - 4px)' : -4, boxShadow: '0 12px 32px rgba(54,30,219,0.12)' }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.25rem 1rem',
                  boxShadow: '0 2px 12px rgba(54,30,219,0.07)',
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  borderTop: `4px solid ${card.color}`,
                  marginTop: index % 2 !== 0 ? '3.5rem' : '0',
                }}
              >
                {/* Flex: 1 wrapper ensures the citation box is perfectly pushed to the bottom of the card */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Header: No Icon, Bigger Number */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{
                        background: card.bg, color: card.color,
                        borderRadius: '8px', padding: '0.25rem 0.75rem',
                        fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em',
                      }}>
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="title-sm" style={{ color: '#212125', lineHeight: 1.3, fontSize: '0.9rem' }}>{card.title}</h3>
                  </div>

                  <p className="body-small" style={{ color: '#6b6b6e', lineHeight: 1.6 }}>{card.desc}</p>
                </div>

                {/* Citations */}
                <div style={{ borderTop: '1px solid #f2f2f4', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {card.citations.map((c, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'flex-start' }}>
                      <span style={{
                        background: card.bg, color: card.color,
                        borderRadius: '4px', padding: '0.15rem 0.4rem',
                        fontSize: '0.55rem', fontWeight: 700,
                      }}>
                        {c.ref}
                      </span>
                      <span style={{ color: '#908f92', fontSize: '0.6rem', lineHeight: 1.45 }}>{c.detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
