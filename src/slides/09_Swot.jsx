import { motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'

const swotData = {
  strengths: {
    label: 'Strengths', labelId: 'Kekuatan', code: 'S',
    cssClass: 'swot-strength', textColor: '#27ae60',
    items: [
      'Pendekatan Hyper-local dengan model B2B2C yang mengamankan akses eksklusif ke pengelola desa wisata di Lombok.',
      'Efisiensi Infrastruktur Mitra: Tanpa modal awal (Zero Capital Expenditure) — mitra tidak perlu membangun sistem IT sendiri.',
      'Selaras dengan arah kebijakan Smart Tourism Pemprov NTB.',
    ],
  },
  weaknesses: {
    label: 'Weaknesses', labelId: 'Kelemahan', code: 'W',
    cssClass: 'swot-weakness', textColor: '#e74c3c',
    items: [
      'Belum ada bukti validasi penerimaan pasar (traction) secara riil dari pengguna maupun mitra.',
      'Sangat bergantung pada tingkat literasi digital vendor lokal yang masih rendah.',
      'Membutuhkan biaya operasional tetap untuk server dan edukasi pasar sebelum mencetak profit.',
    ],
  },
  opportunities: {
    label: 'Opportunities', labelId: 'Peluang', code: 'O',
    cssClass: 'swot-opportunity', textColor: '#b7800f',
    items: [
      'Wisatawan menuntut pemesanan digital terintegrasi (solusi satu pintu) pasca-pandemi.',
      'Momentum kampanye "NTB Mendunia" memfasilitasi ekspansi produk wisata lokal.',
      'Banyak produk desa wisata spesifik yang belum digarap serius oleh OTA global.',
    ],
  },
  threats: {
    label: 'Threats', labelId: 'Ancaman', code: 'T',
    cssClass: 'swot-threat', textColor: '#c0392b',
    items: [
      'Ancaman monopoli dan perang harga dari OTA mapan (Traveloka, Agoda, Tiket.com).',
      'Keengganan pengelola wisata konvensional untuk beralih ke sistem digital.',
      'Risiko ulasan negatif akibat inkonsistensi kualitas layanan vendor di lapangan.',
    ],
  },
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

export default function Swot() {
  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 2rem 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ marginBottom: '1.25rem', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #ed4544)' }} />
              <h1 className="title-lg" style={{ color: '#212125' }}>Matriks SWOT</h1>
            </div>
          </div>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
        >
          {Object.values(swotData).map((quad) => (
            <motion.div key={quad.code} variants={item}
              whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(0,0,0,0.1)' }}
              className={quad.cssClass}
              style={{ borderRadius: '16px', padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${quad.textColor}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: quad.textColor, fontWeight: 800, fontSize: '1rem',
                }}>
                  {quad.code}
                </div>
                <div>
                  <div style={{ color: quad.textColor, fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>{quad.label}</div>
                  <div style={{ color: '#908f92', fontSize: '0.65rem' }}>{quad.labelId}</div>
                </div>
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {quad.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '18px', height: '18px', borderRadius: '4px',
                      background: `${quad.textColor}22`,
                      color: quad.textColor, fontWeight: 700, fontSize: '0.6rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: '0.1rem',
                    }}>{i + 1}</div>
                    <p className="body-small" style={{ color: '#212125', lineHeight: 1.55 }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Source footer */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.4rem' }}
        >
          <span style={{ color: '#908f92', fontSize: '0.57rem', fontStyle: 'italic' }}>
            Framework: Wheelen &amp; Hunger (2012) · Ghaleb (2024)
          </span>
          <span style={{ color: '#908f92', fontSize: '0.57rem' }}>
            Sumber: Tabel 3.4–3.5, Olahan Penulis 2026
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
