import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import squareColored from '../icons/square-colored.png'

// ─── Data ─────────────────────────────────────────────────────
const vpcData = {
  b2b: {
    tab: 'B2B — Vendor Lokal',
    diagramTitle: 'Segmen Vendor Layanan Wisata Lokal (B2B)',
    leftLabel: 'Gelamang',
    rightLabel: 'Vendor Lokal',
    productsServices: {
      title: 'Products\n& Services',
      desc: 'Ekosistem distribusi dan etalase digital (marketing arm).',
    },
    gainCreator: {
      title: 'Gain Creator',
      desc: 'Eksposur digital instan ke pasar spesifik dan efisiensi biaya operasional pemasaran.',
    },
    painRelievers: {
      title: 'Pain Relievers',
      desc: 'Eliminasi hambatan teknis (infrastruktur IT ditangani platform) dan interface manajemen yang disederhanakan.',
    },
    gains: {
      title: 'Gains',
      desc: 'Solusi pemasaran tanpa modal awal (zero-capital expenditure) dengan akses audiens yang luas.',
    },
    pains: {
      title: 'Pains',
      desc: 'Tingginya biaya pembuatan website, rendahnya literasi digital, dan kalah saing visibilitas dari OTA global.',
    },
    jobs: {
      title: "Vendor's Jobs",
      desc: 'Pemasaran produk untuk meningkatkan volume penjualan dan okupansi.',
    },
  },
  b2c: {
    tab: 'B2C — Wisatawan',
    diagramTitle: 'Segmen Wisatawan (B2C)',
    leftLabel: 'Gelamang',
    rightLabel: 'Wisatawan',
    productsServices: {
      title: 'Products\n& Services',
      desc: 'Platform marketplace agregator daya tarik wisata Lombok.',
    },
    gainCreator: {
      title: 'Gain Creator',
      desc: 'Sistem booking self-service dengan metode pembayaran digital yang aman.',
    },
    painRelievers: {
      title: 'Pain Relievers',
      desc: 'Transparansi harga absolut dan sentralisasi data inventaris secara waktu-nyata (real-time).',
    },
    gains: {
      title: 'Gains',
      desc: 'Efisiensi waktu liburan melalui reservasi terintegrasi dalam satu pintu.',
    },
    pains: {
      title: 'Pains',
      desc: 'Pencarian manual yang membuang waktu, asimetri informasi, dan ketidakpastian harga.',
    },
    jobs: {
      title: "Tourist's Jobs",
      desc: 'Mencari pengalaman wisata kearifan lokal (hyper-local immersion). Melakukan perencanaan liburan dan pemesanan layanan wisata secara mandiri.',
    },
  },
}

// ─── VPC Clean Aesthetic Diagram ─────────────────────────────────────
function VPCDiagram({ data }) {
  const isB2C = data.tab.includes('B2C')
  const rightColor = isB2C ? '#54c980' : '#db991d'
  const rightRgba = isB2C ? 'rgba(84,201,128,' : 'rgba(219,153,29,'
  const leftColor = '#361edb'
  const leftRgba = 'rgba(54,30,219,'

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      
      {/* Title */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#212125', marginBottom: '2rem', textAlign: 'left', letterSpacing: '-0.01em' }}>
        {data.diagramTitle}
      </h2>
      
      {/* Canvas Area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        
        {/* LEFT SQUARE — Gelamang Value Map */}
        <div style={{
           position: 'relative', width: '42%', aspectRatio: '1/1', 
           border: `2px solid ${leftColor}`, borderRadius: '24px', background: '#ffffff',
           boxShadow: `0 12px 40px ${leftRgba}0.08)`
        }}>
           {/* SVG Dividers */}
           <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '24px' }} viewBox="0 0 300 300">
             <line x1="60" y1="0" x2="150" y2="150" stroke={`${leftRgba}0.15)`} strokeWidth="2" />
             <line x1="60" y1="300" x2="150" y2="150" stroke={`${leftRgba}0.15)`} strokeWidth="2" />
             <line x1="150" y1="150" x2="300" y2="150" stroke={`${leftRgba}0.15)`} strokeWidth="2" />
           </svg>
           
           {/* Text: Products & Services */}
           <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', width: '33%' }}>
             <h3 style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.2, color: leftColor, whiteSpace: 'pre-line' }}>{data.productsServices.title}</h3>
             <p style={{ fontSize: '0.75rem', marginTop: '0.4rem', lineHeight: 1.5, color: '#6b6b6e', textAlign: 'left' }}>{data.productsServices.desc}</p>
           </div>
           
           {/* Text: Gain Creator */}
           <div style={{ position: 'absolute', top: '6%', left: '55%', transform: 'translateX(-50%)', width: '55%' }}>
             <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#212125', textAlign: 'center', marginBottom: '0.4rem' }}>{data.gainCreator.title}</h3>
             <p style={{ fontSize: '0.75rem', color: '#6b6b6e', textAlign: 'center', lineHeight: 1.5 }}>{data.gainCreator.desc}</p>
           </div>

           {/* Text: Pain Relievers */}
           <div style={{ position: 'absolute', bottom: '6%', left: '55%', transform: 'translateX(-50%)', width: '55%' }}>
             <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#212125', textAlign: 'center', marginBottom: '0.4rem' }}>{data.painRelievers.title}</h3>
             <p style={{ fontSize: '0.75rem', color: '#6b6b6e', textAlign: 'center', lineHeight: 1.5 }}>{data.painRelievers.desc}</p>
           </div>

           {/* Center Logo */}
           <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              background: '#ffffff', padding: '14px 10px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0'
           }}>
             <img src={squareColored} alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
           </div>
        </div>

        {/* THICK CONNECTING LINE */}
        <div style={{ width: '13%', height: '3px', background: `linear-gradient(to right, ${leftColor}, ${rightColor})`, zIndex: 10 }} />

        {/* RIGHT CIRCLE — Customer Profile */}
        <div style={{
           position: 'relative', width: '42%', aspectRatio: '1/1', 
           border: `2px solid ${rightColor}`, borderRadius: '50%', background: '#ffffff',
           boxShadow: `0 12px 40px ${rightRgba}0.1)`
        }}>
           {/* SVG Dividers */}
           <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%' }} viewBox="0 0 300 300">
             <line x1="150" y1="150" x2="0" y2="150" stroke={`${rightRgba}0.2)`} strokeWidth="2" />
             <line x1="150" y1="150" x2="225" y2="20.1" stroke={`${rightRgba}0.2)`} strokeWidth="2" />
             <line x1="150" y1="150" x2="225" y2="279.9" stroke={`${rightRgba}0.2)`} strokeWidth="2" />
           </svg>
           
           {/* Text: Gains */}
           <div style={{ position: 'absolute', top: '12%', left: '40%', transform: 'translateX(-50%)', width: '50%' }}>
             <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#212125', textAlign: 'center', marginBottom: '0.4rem' }}>{data.gains.title}</h3>
             <p style={{ fontSize: '0.75rem', color: '#6b6b6e', textAlign: 'center', lineHeight: 1.5 }}>{data.gains.desc}</p>
           </div>

           {/* Text: Pains */}
           <div style={{ position: 'absolute', bottom: '12%', left: '40%', transform: 'translateX(-50%)', width: '50%' }}>
             <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#212125', textAlign: 'center', marginBottom: '0.4rem' }}>{data.pains.title}</h3>
             <p style={{ fontSize: '0.75rem', color: '#6b6b6e', textAlign: 'center', lineHeight: 1.5 }}>{data.pains.desc}</p>
           </div>

           {/* Text: Customer Jobs */}
           <div style={{ position: 'absolute', top: '50%', right: '4%', transform: 'translateY(-50%)', width: '38%' }}>
             <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: rightColor, textAlign: 'center', marginBottom: '0.4rem' }}>{data.jobs.title}</h3>
             <p style={{ fontSize: '0.72rem', color: '#6b6b6e', textAlign: 'center', lineHeight: 1.45 }}>{data.jobs.desc}</p>
           </div>
        </div>

      </div>

      {/* BOTTOM LABELS */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.75rem', width: '100%' }}>
         <div style={{ width: '42%', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, color: leftColor }}>
            {data.leftLabel}
         </div>
         <div style={{ width: '13%' }} />
         <div style={{ width: '42%', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, color: rightColor }}>
            {data.rightLabel}
         </div>
      </div>

    </div>
  )
}

// ─── Main Slide Wrap ───────────────────────────────────────────
export default function VPC() {
  const [activeTab, setActiveTab] = useState('b2b')
  const data = vpcData[activeTab]

  return (
    <SlideLayout bgClass="bg-slide-light">
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', padding: '3.5rem 3.5rem 5rem 3.5rem' }}>
        
        {/* Layout actions header for switching variants */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '4px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #361edb, #ed4544)' }} />
                <h1 className="title-lg" style={{ color: '#212125' }}>Value Proposition Canvas</h1>
              </div>
            </div>
          </motion.div>
          
           <div style={{ display: 'flex', gap: '0.6rem' }}>
             {Object.entries(vpcData).map(([key, d]) => {
               const isB2C = d.tab.includes('B2C')
               const activeColor = isB2C && activeTab === key ? '#54c980' : '#361edb'
               return (
                 <button
                   key={key}
                   onClick={() => setActiveTab(key)}
                   style={{
                     padding: '0.5rem 1.25rem',
                     borderRadius: '8px',
                     border: '1px solid',
                     borderColor: activeTab === key ? activeColor : '#dcdcdc',
                     fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 700,
                     cursor: 'pointer',
                     background: activeTab === key ? activeColor : '#ffffff',
                     color: activeTab === key ? '#ffffff' : '#6b6b6e',
                     transition: 'all 0.25s ease',
                     boxShadow: activeTab === key ? `0 4px 12px ${activeColor}40` : 'none'
                   }}
                 >
                   {d.tab}
                 </button>
               )
             })}
           </div>
        </div>

        {/* VPC Exact Match Diagram */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ flex: 1, display: 'flex', alignItems: 'center' }}
          >
            <VPCDiagram data={data} />
          </motion.div>
        </AnimatePresence>

      </div>
    </SlideLayout>
  )
}
