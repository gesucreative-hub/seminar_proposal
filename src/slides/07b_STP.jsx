import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, MapPin, ArrowRight, Crosshair, Zap, Star, Shield, Clock, Smartphone } from 'lucide-react'
import SlideLayout from '../components/SlideLayout'

// ─── Data ──────────────────────────────────────────────────────────────────────

const segmentData = [
  {
    id: 'b2c',
    side: 'Sisi Permintaan',
    label: 'Wisatawan (B2C)',
    icon: Users,
    color: '#361edb',
    bg: '#dedaf9',
    segments: [
      {
        title: 'Generasi Milenial & Gen-Z',
        traits: [
          { icon: Smartphone, text: 'Melek teknologi, dominan gawai pintar' },
          { icon: Clock, text: '18–45 tahun, kelas menengah hingga bawah' },
          { icon: Star, text: 'Sensitif ulasan & bukti sosial (social proof)' },
        ],
      },
      {
        title: 'FIT (Free Independent Traveler)',
        traits: [
          { icon: Zap, text: 'Pemesanan spontan, swalayan' },
          { icon: MapPin, text: 'Mencari pengalaman lokal otentik (hyper-local)' },
          { icon: Shield, text: 'Menghindari negosiasi harga manual' },
        ],
      },
    ],
    source: 'Tabel 3.3, Olahan Penulis 2026',
  },
  {
    id: 'b2b',
    side: 'Sisi Penawaran',
    label: 'Vendor Lokal (B2B)',
    icon: MapPin,
    color: '#db991d',
    bg: '#fff3c4',
    segments: [
      {
        title: 'Entitas Akar Rumput',
        traits: [
          { icon: MapPin, text: 'Pokdarwis & Pengelola Desa Wisata' },
          { icon: Star, text: 'Produk berkualitas, tapi terkendala literasi digital' },
          { icon: Shield, text: 'Tanpa modal awal (Zero Capital Expenditure) untuk sistem booking' },
        ],
      },
      {
        title: 'UMKM & Vendor Independen',
        traits: [
          { icon: Zap, text: 'Sewa alat, akomodasi, jasa wisata lokal' },
          { icon: Clock, text: 'Radius KEK Mandalika & Lombok Timur' },
          { icon: Users, text: 'Tidak memenuhi syarat masuk OTA global' },
        ],
      },
    ],
    source: 'Tabel 3.3, Olahan Penulis 2026',
  },
]

const targetData = {
  primary: 'Wisatawan Independen (FIT)',
  primaryBadge: 'Target Primer · B2C',
  primaryColor: '#361edb',
  points: [
    'Fokus pada pengalaman wisata lokal mendalam (Hyper-Local Immersion).',
    'Wisatawan merencanakan tour/trip secara mandiri — butuh sistem pemesanan spontan.',
    'Menginap di non-bintang (homestay, villa, bungalow) untuk menghindari persaingan langsung OTA.',
  ],
  secondary: 'Vendor Pariwisata Lokal',
  secondaryBadge: 'Target Sekunder · B2B',
  secondaryColor: '#db991d',
  secondaryPoints: [
    'Entitas akar rumput di Lombok yang memiliki produk berkualitas.',
    'Memiliki produk bermutu, tapi terkendala promosi & literasi digital.',
    'Tanpa modal awal (Zero CapEx) untuk infrastruktur pemesanan mandiri.',
  ],
  source: 'Gambar 3.4, Olahan Penulis 2026',
}

const positionData = {
  tag: 'Hyper-Local Enabler',
  tagColor: '#54c980',
  tagBg: '#d4f2e3',
  headline: 'Agregator niche yang dikurasi secara eksklusif untuk pariwisata akar rumput NTB.',
  pillars: [
    {
      emoji: '🌿',
      title: 'Bukan OTA Biasa',
      desc: 'Tidak bersaing langsung dengan Traveloka atau Tiket.com. Platform ini mengisi ceruk pasar (niche) yang sengaja mereka abaikan.',
      color: '#54c980',
      bg: '#d4f2e3',
    },
    {
      emoji: '🔒',
      title: 'Premi Keamanan',
      desc: 'Rekening bersama (escrow) & ulasan terverifikasi yang menjamin keamanan transaksi dari risiko penipuan dan ketidakhadiran (no-show).',
      color: '#361edb',
      bg: '#dedaf9',
    },
    {
      emoji: '⚡',
      title: 'Zero Barrier',
      desc: 'Tanpa biaya pendaftaran & tanpa biaya langganan untuk vendor B2B. Komisi (take-rate) 10% hanya berlaku saat transaksi terjadi.',
      color: '#db991d',
      bg: '#fff3c4',
    },
  ],
  analogyTitle: 'Konsep Tingkat Tinggi',
  analogy: '"Shopify + Airbnb, direkayasa eksklusif untuk pariwisata akar rumput Nusa Tenggara Barat."',
  source: 'Gambar 3.4, Olahan Penulis 2026',
}

// ─── Component ─────────────────────────────────────────────────────────────────

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }

function SegmentCard({ seg, isModal }) {
  return (
    <div style={{
      background: isModal ? '#f8f8fa' : '#fafafe',
      borderRadius: '12px',
      padding: isModal ? '1.25rem' : '0.875rem',
      border: '1px solid #ebebee',
    }}>
      <div style={{ fontWeight: 700, color: '#212125', fontSize: isModal ? '1rem' : '0.78rem', marginBottom: isModal ? '0.75rem' : '0.5rem' }}>
        {seg.title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isModal ? '0.5rem' : '0.35rem' }}>
        {seg.traits.map((t, i) => {
          const Icon = t.icon
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icon size={isModal ? 14 : 11} color="#908f92" style={{ flexShrink: 0 }} />
              <span style={{ color: '#6b6b6e', fontSize: isModal ? '0.9rem' : '0.65rem', lineHeight: 1.45 }}>{t.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function STP() {
  const [selectedPanel, setSelectedPanel] = useState(null)

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem 5rem' }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ marginBottom: '1.1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '4px', height: '24px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #54c980)' }} />
              <h1 className="title-md" style={{ color: '#212125' }}>Analisis Pasar — STP</h1>
            </div>
          </div>
        </motion.div>

        {/* ── 3-Panel Flow ── */}
        <motion.div variants={container} initial="hidden" animate="show"
          style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '0.75rem', alignItems: 'center', minHeight: 0 }}
        >

          {/* ══ SEGMENTATION ══ */}
          <motion.div variants={item}
            layoutId="panel-seg"
            onClick={() => setSelectedPanel('seg')}
            whileHover={{ scale: 1.015, boxShadow: '0 12px 32px rgba(54,30,219,0.12)', zIndex: 10 }}
            whileTap={{ scale: 0.99 }}
            style={{ background: '#ffffff', borderRadius: '18px', padding: '1.25rem', boxShadow: '0 2px 10px rgba(54,30,219,0.07)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '4px solid #361edb' }}
          >
            {/* Panel Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dedaf9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={18} color="#361edb" />
              </div>
              <div>
                <div style={{ color: '#361edb', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>01 · Segmenting</div>
                <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.9rem' }}>Segmentasi Pasar</div>
              </div>
            </div>

            {/* Label Badges */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#dedaf9', color: '#361edb', borderRadius: '6px', padding: '0.15rem 0.5rem', fontSize: '0.55rem', fontWeight: 700 }}>B2C · Wisatawan</span>
              <span style={{ background: '#fff3c4', color: '#db991d', borderRadius: '6px', padding: '0.15rem 0.5rem', fontSize: '0.55rem', fontWeight: 700 }}>B2B · Vendor</span>
            </div>

            {/* Segment Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
              {segmentData.map(seg => (
                <div key={seg.id} style={{ borderRadius: '12px', border: `1px solid ${seg.color}22`, padding: '0.75rem', background: `${seg.color}06` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <span style={{ background: seg.bg, color: seg.color, borderRadius: '4px', padding: '0.1rem 0.4rem', fontSize: '0.5rem', fontWeight: 800 }}>{seg.side}</span>
                  </div>
                  <div style={{ color: seg.color, fontWeight: 700, fontSize: '0.78rem', marginBottom: '0.35rem' }}>{seg.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {seg.segments.map((s, si) => (
                      <div key={si} style={{ color: '#6b6b6e', fontSize: '0.62rem', lineHeight: 1.45 }}>
                        · <strong style={{ color: '#46464a' }}>{s.title}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ color: '#908f92', fontSize: '0.5rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.4rem' }}>
              Sumber: {segmentData[0].source}
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 0.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowRight size={28} color="#db991d" style={{ opacity: 0.7 }} />
              <span style={{ color: '#db991d', fontSize: '0.5rem', fontWeight: 700, opacity: 0.7, letterSpacing: '0.06em' }}>FILTER</span>
            </div>
          </motion.div>

          {/* ══ TARGETING ══ */}
          <motion.div variants={item}
            layoutId="panel-target"
            onClick={() => setSelectedPanel('target')}
            whileHover={{ scale: 1.015, boxShadow: '0 12px 32px rgba(219,153,29,0.12)', zIndex: 10 }}
            whileTap={{ scale: 0.99 }}
            style={{ background: '#ffffff', borderRadius: '18px', padding: '1.25rem', boxShadow: '0 2px 10px rgba(219,153,29,0.07)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '4px solid #db991d' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fff3c4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Crosshair size={18} color="#db991d" />
              </div>
              <div>
                <div style={{ color: '#db991d', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>02 · Targeting</div>
                <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.9rem' }}>Penentuan Target</div>
              </div>
            </div>

            {/* Primary Target */}
            <div style={{ background: 'linear-gradient(135deg, #361edb12, #361edb08)', border: '1.5px solid #361edb30', borderRadius: '12px', padding: '0.875rem' }}>
              <div style={{ background: '#361edb', color: '#fff', borderRadius: '6px', padding: '0.15rem 0.55rem', fontSize: '0.5rem', fontWeight: 800, display: 'inline-block', marginBottom: '0.4rem' }}>
                {targetData.primaryBadge}
              </div>
              <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.45rem' }}>{targetData.primary}</div>
              {targetData.points.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.3rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#361edb', marginTop: '0.35rem', flexShrink: 0 }} />
                  <span style={{ color: '#46464a', fontSize: '0.62rem', lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Secondary Target */}
            <div style={{ background: 'linear-gradient(135deg, #db991d10, #db991d06)', border: '1.5px solid #db991d30', borderRadius: '12px', padding: '0.875rem', flex: 1 }}>
              <div style={{ background: '#db991d', color: '#fff', borderRadius: '6px', padding: '0.15rem 0.55rem', fontSize: '0.5rem', fontWeight: 800, display: 'inline-block', marginBottom: '0.4rem' }}>
                {targetData.secondaryBadge}
              </div>
              <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.45rem' }}>{targetData.secondary}</div>
              {targetData.secondaryPoints.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.3rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#db991d', marginTop: '0.35rem', flexShrink: 0 }} />
                  <span style={{ color: '#46464a', fontSize: '0.62rem', lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>

            <div style={{ color: '#908f92', fontSize: '0.5rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.4rem' }}>
              Sumber: {targetData.source}
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: '0 0.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowRight size={28} color="#54c980" style={{ opacity: 0.7 }} />
              <span style={{ color: '#54c980', fontSize: '0.5rem', fontWeight: 700, opacity: 0.7, letterSpacing: '0.06em' }}>POSISI</span>
            </div>
          </motion.div>

          {/* ══ POSITIONING ══ */}
          <motion.div variants={item}
            layoutId="panel-pos"
            onClick={() => setSelectedPanel('pos')}
            whileHover={{ scale: 1.015, boxShadow: '0 12px 32px rgba(84,201,128,0.12)', zIndex: 10 }}
            whileTap={{ scale: 0.99 }}
            style={{ background: '#ffffff', borderRadius: '18px', padding: '1.25rem', boxShadow: '0 2px 10px rgba(84,201,128,0.07)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '4px solid #54c980' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#d4f2e3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Star size={18} color="#54c980" />
              </div>
              <div>
                <div style={{ color: '#54c980', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>03 · Positioning</div>
                <div style={{ color: '#212125', fontWeight: 700, fontSize: '0.9rem' }}>Posisi Kompetitif</div>
              </div>
            </div>

            {/* Tag */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{
                background: 'linear-gradient(135deg, #54c980, #36b868)',
                color: '#fff', borderRadius: '999px', padding: '0.35rem 1.25rem',
                fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em',
                boxShadow: '0 4px 16px #54c98040',
              }}>
                {positionData.tag}
              </span>
            </div>

            <p style={{ color: '#46464a', fontSize: '0.65rem', lineHeight: 1.6, textAlign: 'center', fontStyle: 'italic' }}>
              {positionData.headline}
            </p>

            {/* 3 Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              {positionData.pillars.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', borderRadius: '10px', padding: '0.6rem 0.75rem', background: `${p.color}08`, border: `1px solid ${p.color}20` }}>
                  <div style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>{p.emoji}</div>
                  <div>
                    <div style={{ color: p.color, fontWeight: 700, fontSize: '0.65rem', marginBottom: '0.2rem' }}>{p.title}</div>
                    <p style={{ color: '#6b6b6e', fontSize: '0.6rem', lineHeight: 1.45 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Analogy */}
            <div style={{ background: 'linear-gradient(135deg, rgba(54,30,219,0.04), rgba(84,201,128,0.06))', border: '1px dashed rgba(84,201,128,0.4)', borderRadius: '10px', padding: '0.65rem' }}>
              <div style={{ color: '#908f92', fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.3rem' }}>{positionData.analogyTitle}</div>
              <p style={{ color: '#212125', fontSize: '0.62rem', fontStyle: 'italic', lineHeight: 1.5, fontWeight: 500 }}>{positionData.analogy}</p>
            </div>

            <div style={{ color: '#908f92', fontSize: '0.5rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.4rem' }}>
              Sumber: {positionData.source}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Modal Overlay ── */}
        <AnimatePresence>
          {selectedPanel && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
              onClick={() => setSelectedPanel(null)}
            >
              <motion.div
                layoutId={`panel-${selectedPanel}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  maxWidth: '700px',
                  width: '100%',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
                  cursor: 'default',
                  borderTop: selectedPanel === 'seg' ? '6px solid #361edb' : selectedPanel === 'target' ? '6px solid #db991d' : '6px solid #54c980',
                }}
              >
                {/* ── Modal: Segmentation ── */}
                {selectedPanel === 'seg' && (
                  <>
                    <div>
                      <div style={{ color: '#361edb', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>01 · Segmenting</div>
                      <h2 style={{ color: '#212125', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>Segmentasi Pasar B2B2C</h2>
                      <p style={{ color: '#908f92', fontSize: '0.9rem' }}>Gelamang melayani dua sisi pasar yang saling membutuhkan dalam ekosistem marketplace.</p>
                    </div>
                    {segmentData.map(seg => {
                      const Icon = seg.icon
                      return (
                        <div key={seg.id}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: seg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Icon size={20} color={seg.color} />
                            </div>
                            <div>
                              <span style={{ background: seg.bg, color: seg.color, borderRadius: '6px', padding: '0.15rem 0.55rem', fontSize: '0.65rem', fontWeight: 800 }}>{seg.side}</span>
                              <div style={{ color: '#212125', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.15rem' }}>{seg.label}</div>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                            {seg.segments.map((s, si) => <SegmentCard key={si} seg={s} isModal={true} />)}
                          </div>
                        </div>
                      )
                    })}
                    <div style={{ color: '#908f92', fontSize: '0.75rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.875rem' }}>Sumber: {segmentData[0].source}</div>
                  </>
                )}

                {/* ── Modal: Targeting ── */}
                {selectedPanel === 'target' && (
                  <>
                    <div>
                      <div style={{ color: '#db991d', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>02 · Targeting</div>
                      <h2 style={{ color: '#212125', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>Penentuan Target Pasar</h2>
                      <p style={{ color: '#908f92', fontSize: '0.9rem' }}>Dari seluruh segmen yang teridentifikasi, Gelamang memprioritaskan dua kelompok utama.</p>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #361edb08, #361edb04)', border: '2px solid #361edb30', borderRadius: '16px', padding: '1.5rem' }}>
                      <span style={{ background: '#361edb', color: '#fff', borderRadius: '8px', padding: '0.2rem 0.7rem', fontSize: '0.65rem', fontWeight: 800, display: 'inline-block', marginBottom: '0.75rem' }}>{targetData.primaryBadge}</span>
                      <h3 style={{ color: '#212125', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.875rem' }}>{targetData.primary}</h3>
                      {targetData.points.map((p, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#361edb', marginTop: '0.4rem', flexShrink: 0 }} />
                          <span style={{ color: '#46464a', fontSize: '1rem', lineHeight: 1.55 }}>{p}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #db991d08, #db991d04)', border: '2px solid #db991d30', borderRadius: '16px', padding: '1.5rem' }}>
                      <span style={{ background: '#db991d', color: '#fff', borderRadius: '8px', padding: '0.2rem 0.7rem', fontSize: '0.65rem', fontWeight: 800, display: 'inline-block', marginBottom: '0.75rem' }}>{targetData.secondaryBadge}</span>
                      <h3 style={{ color: '#212125', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.875rem' }}>{targetData.secondary}</h3>
                      {targetData.secondaryPoints.map((p, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#db991d', marginTop: '0.4rem', flexShrink: 0 }} />
                          <span style={{ color: '#46464a', fontSize: '1rem', lineHeight: 1.55 }}>{p}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ color: '#908f92', fontSize: '0.75rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.875rem' }}>Sumber: {targetData.source}</div>
                  </>
                )}

                {/* ── Modal: Positioning ── */}
                {selectedPanel === 'pos' && (
                  <>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#54c980', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>03 · Positioning</div>
                      <h2 style={{ color: '#212125', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Posisi Kompetitif Gelamang</h2>
                      <span style={{ background: 'linear-gradient(135deg, #54c980, #36b868)', color: '#fff', borderRadius: '999px', padding: '0.4rem 1.75rem', fontSize: '0.9rem', fontWeight: 800, boxShadow: '0 4px 16px #54c98040', display: 'inline-block' }}>
                        {positionData.tag}
                      </span>
                    </div>
                    <p style={{ color: '#46464a', fontSize: '1rem', lineHeight: 1.65, textAlign: 'center', fontStyle: 'italic' }}>
                      {positionData.headline}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                      {positionData.pillars.map((p, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', borderRadius: '14px', padding: '1.1rem 1.25rem', background: `${p.color}08`, border: `1.5px solid ${p.color}25` }}>
                          <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.emoji}</div>
                          <div>
                            <div style={{ color: p.color, fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{p.title}</div>
                            <p style={{ color: '#6b6b6e', fontSize: '0.9rem', lineHeight: 1.55 }}>{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, rgba(54,30,219,0.04), rgba(84,201,128,0.08))', border: '1.5px dashed rgba(84,201,128,0.5)', borderRadius: '14px', padding: '1.25rem' }}>
                      <div style={{ color: '#908f92', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>{positionData.analogyTitle}</div>
                      <p style={{ color: '#212125', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.6, fontWeight: 600 }}>{positionData.analogy}</p>
                    </div>
                    <div style={{ color: '#908f92', fontSize: '0.75rem', fontStyle: 'italic', borderTop: '1px solid #f2f2f4', paddingTop: '0.875rem' }}>Sumber: {positionData.source}</div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideLayout>
  )
}
