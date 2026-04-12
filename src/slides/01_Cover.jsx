import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen } from 'lucide-react'
import horizontalWhite from '../icons/horizontal-white.png'
import laptopMockup from '../images/gelamang-macbook.png'
import pplLogo from '../icons/PPL_WHITE.png'
import upwLogo from '../icons/Logo UPW (W).png'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function Cover() {
  return (
    <div className="slide-viewport bg-cover-gradient" style={{ position: 'relative' }}>

      {/* Logo — Top Right (Gelamang) */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2.5rem',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <img src={horizontalWhite} alt="Gelamang Logo" style={{ height: 'clamp(2.5rem, 5vw, 3.5rem)', objectFit: 'contain' }} />
      </motion.div>

      {/* Logos — Top Left (PPL + UPW) */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '2rem',
          zIndex: 20,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <img src={pplLogo} alt="Politeknik Pariwisata Lombok" style={{ height: 'clamp(3rem, 6vw, 4.5rem)', objectFit: 'contain' }} />
        <img src={upwLogo} alt="Program Studi UPW" style={{ height: 'clamp(2.5rem, 5vw, 3.75rem)', objectFit: 'contain' }} />
      </motion.div>
      
      {/* Decorative Orbs (True Full Bleed) */}
      <div style={{
        position: 'absolute', top: '-10%', right: '10%',
        width: '50vw', height: '50vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(219,153,29,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '40vw', height: '40vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88,68,225,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Mockups (Sticky to Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: '-2%', // Sink it very slightly so the black bezel hits the physical screen bottom seamlessly
          right: '-4%', // Shift to the right organically
          width: '70vw', // Massively increase base width
          maxWidth: '1200px', // Allow huge scaling on big screens
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          
          {/* Laptop Mockup */}
          <img
            src={laptopMockup}
            alt="Gelamang Desktop Platform"
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(-8px 16px 32px rgba(0,0,0,0.4))',
              zIndex: 2, 
            }}
          />
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3.5rem clamp(1.5rem, 6vw, 5rem) 6rem',
        overflowY: 'auto',
        overflowX: 'hidden',
      }} className="hide-scrollbar">
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ maxWidth: '650px', textAlign: 'left' }}
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(219,153,29,0.2)',
                border: '1px solid rgba(219,153,29,0.5)',
                borderRadius: '999px',
                padding: '0.35rem 1.1rem',
                color: '#f3ddb4',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                <GraduationCap size={14} />
                Seminar Proposal Proyek Akhir
              </span>
            </motion.div>



            {/* Subtitle */}
            <motion.p variants={item} style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
              maxWidth: '640px',
              marginBottom: '2rem',
              lineHeight: 1.55,
            }}>
              <strong style={{ color: '#f3ddb4' }}>Rencana Bisnis "Gelamang"</strong> <em>Marketplace</em> Daya Tarik Wisata<br />
              di Lombok Menggunakan <em>Lean Canvas</em>
            </motion.p>

            {/* Presenter card */}
            <motion.div variants={item}>
              <div className="glass" style={{
                borderRadius: '20px',
                padding: '1.25rem 1.75rem',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '1rem',
                textAlign: 'left',
                maxWidth: '500px',
                width: '100%',
              }}>
                {/* Student */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(219,153,29,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Users size={16} color="#db991d" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Mahasiswa Penyusun</div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>I Gede Surya Dharma</div>
                    <div style={{ color: '#db991d', fontSize: '0.78rem', fontWeight: 500 }}>NIM. 2201014</div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />

                {/* Advisors */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(88,68,225,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '0.2rem',
                  }}>
                    <BookOpen size={16} color="#9b8fed" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Dosen Pembimbing</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.25rem' }}>
                      1. Muhammad Ilham Hamzah, S.Tr.Par., MBA
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.82rem', fontWeight: 500 }}>
                      2. Manda Rahmat Husein Lubis, SE, MM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
