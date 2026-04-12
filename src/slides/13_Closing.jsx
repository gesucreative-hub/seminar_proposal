import { motion } from 'framer-motion'
import { Users, BookOpen } from 'lucide-react'
import horizontalWhite from '../icons/horizontal-white.png'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Closing() {
  return (
    <div className="slide-viewport bg-cover-gradient" style={{ position: 'relative' }}>
      
      {/* Decorative orbs (True Full Bleed) */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '35vw', height: '35vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(219,153,29,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', top: '5%', left: '-8%',
        width: '28vw', height: '28vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88,68,225,0.28) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Main Content Area */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.5rem 6rem',
        textAlign: 'center',
        overflowY: 'auto',
        overflowX: 'hidden',
      }} className="hide-scrollbar">
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />

        <motion.div variants={container} initial="hidden" animate="show" style={{ maxWidth: '700px', width: '100%' }}>
          {/* Label */}
          <motion.div variants={item}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(219,153,29,0.2)', border: '1px solid rgba(219,153,29,0.45)',
              borderRadius: '999px', padding: '0.3rem 1rem',
              color: '#f3ddb4', fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              SEMINAR PROPOSAL PROYEK AKHIR
            </div>
          </motion.div>

          {/* Main message */}
          <motion.div variants={item}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <img src={horizontalWhite} alt="Gelamang" style={{ height: 'clamp(2rem, 5vw, 3.5rem)', opacity: 0.8 }} />
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #f3ddb4, #db991d, #e7bb68)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}>
              Matur
            </h1>
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Tampiasih.
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={item}>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
              fontStyle: 'italic', letterSpacing: '0.02em',
              marginBottom: '2rem', lineHeight: 1.6,
            }}>
              "Perjalanan fleksibel dan terpercaya."
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={item}>
            <div style={{
              width: '4rem', height: '2px', margin: '0 auto 1.75rem',
              background: 'linear-gradient(90deg, #361edb, #db991d)',
              borderRadius: '1px',
            }} />
          </motion.div>


          {/* Key References */}
          <motion.div variants={item} style={{ marginTop: '1.25rem' }}>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '14px', padding: '0.875rem 1.25rem',
              textAlign: 'left',
            }}>
              <div style={{
                color: '#db991d', fontWeight: 700, fontSize: '0.6rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '0.6rem', textAlign: 'center',
              }}>
                Referensi Utama
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem 1.5rem' }}>
                {[
                  'BPS NTB No. 20/03/52/Th. XX (2026)',
                  'Blank & Dorf — The Startup Owner\'s Manual (2020)',
                  'Wheelen & Hunger — Strategic Management (2012)',
                  'Maurya — Running Lean (2012)',
                  'UU No. 10 Tahun 2009 tentang Kepariwisataan',
                  'Sugiyono — Metode Penelitian (2017)',
                ].map((ref, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.35rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#db991d', fontSize: '0.55rem', flexShrink: 0, marginTop: '0.1rem' }}>▸</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.58rem', lineHeight: 1.45 }}>{ref}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.div variants={item} style={{ marginTop: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
             The hyper-local tourism enabler of Lombok.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
