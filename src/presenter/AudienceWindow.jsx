import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SlideLayout from '../components/SlideLayout'
import { createChannel, MSG } from './presenterChannel'

// ─── Import all slides (same order as App.jsx) ────────────────────────────
import Cover             from '../slides/01_Cover'
import LatarBelakang     from '../slides/02_LatarBelakang'
import RumusanMasalah    from '../slides/03_RumusanMasalah'
import Metodologi        from '../slides/04_MetodologiPenelitian'
import KonsepBisnis      from '../slides/05_KonsepBisnis'
import LeanCanvas        from '../slides/06_LeanCanvas'
import VPC               from '../slides/06b_VPC'
import AnalisisPasar     from '../slides/07_AnalisisPasar'
import STP               from '../slides/07b_STP'
import DataPasar         from '../slides/08_DataPasar'
import Swot              from '../slides/09_Swot'
import SwotKuantifikasi  from '../slides/10_SwotKuantifikasi'
import KompetitorAnalisis from '../slides/11_KompetitorAnalisis'
import ExecutiveSummary  from '../slides/12_ExecutiveSummary'
import Closing           from '../slides/13_Closing'

const SLIDES = [
  Cover, LatarBelakang, RumusanMasalah, Metodologi,
  KonsepBisnis, LeanCanvas, VPC, AnalisisPasar, STP, DataPasar,
  Swot, SwotKuantifikasi, KompetitorAnalisis, ExecutiveSummary, Closing,
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir < 0 ? '60%' : '-60%', opacity: 0 }),
}

export default function AudienceWindow() {
  const [current, setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const channelRef = useRef(null)

  // ── On mount: open channel, request current state, enter fullscreen ────
  useEffect(() => {
    const ch = createChannel()
    channelRef.current = ch

    // Ask the presenter for the current state immediately
    ch.postMessage({ type: MSG.AUDIENCE_READY })

    ch.onmessage = ({ data }) => {
      if (data.type === MSG.GOTO_SLIDE || data.type === MSG.SYNC_STATE) {
        const next = data.slide
        setCurrent(prev => {
          setDirection(next > prev ? 1 : -1)
          return next
        })
      }
    }

    // Attempt fullscreen on the document element
    const tryFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {})
      }
    }
    // Small delay to let the browser settle after window.open
    setTimeout(tryFullscreen, 400)

    return () => ch.close()
  }, [])

  const SlideComponent = SLIDES[current]

  return (
    // Completely clean — no nav bar, no sidebar, just the slide
    <div style={{ width: '100vw', height: '100dvh', overflow: 'hidden', position: 'relative', background: '#212125' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
