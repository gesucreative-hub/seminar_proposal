import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import AppendixModal from './components/AppendixModal'
import PresenterApp from './presenter/PresenterApp'
import AudienceWindow from './presenter/AudienceWindow'

import Cover             from './slides/01_Cover'
import LatarBelakang     from './slides/02_LatarBelakang'
import RumusanMasalah    from './slides/03_RumusanMasalah'
import Metodologi        from './slides/04_MetodologiPenelitian'
import KonsepBisnis      from './slides/05_KonsepBisnis'
import LeanCanvas        from './slides/06_LeanCanvas'
import VPC               from './slides/06b_VPC'
import AnalisisPasar     from './slides/07_AnalisisPasar'
import STP               from './slides/07b_STP'
import DataPasar         from './slides/08_DataPasar'
import Swot              from './slides/09_Swot'
import SwotKuantifikasi  from './slides/10_SwotKuantifikasi'
import KompetitorAnalisis from './slides/11_KompetitorAnalisis'
import ExecutiveSummary  from './slides/12_ExecutiveSummary'
import Closing           from './slides/13_Closing'

const SLIDES = [
  Cover, LatarBelakang, RumusanMasalah, Metodologi,
  KonsepBisnis, LeanCanvas, VPC, AnalisisPasar, STP, DataPasar,
  Swot, SwotKuantifikasi, KompetitorAnalisis, ExecutiveSummary, Closing,
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? '60%' : '-60%', opacity: 0 }),
}

export default function App() {
  // ── Presenter mode routing (zero impact on default presentation) ──────
  const _params = new URLSearchParams(window.location.search)
  const _mode   = _params.get('mode')
  if (_mode === 'presenter') return <PresenterApp />
  if (_mode === 'audience')  return <AudienceWindow />
  // ─────────────────────────────────────────────────────────────────────

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (idx) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const goNext = () => goTo(current + 1)
  const goPrev = () => goTo(current - 1)

  const SlideComponent = SLIDES[current]

  return (
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

      <Navigation
        current={current}
        total={SLIDES.length}
        onPrev={goPrev}
        onNext={goNext}
        onGoto={goTo}
      />

      {/* Appendix: Timeline · Tech Stack · Panduan Wawancara */}
      <AppendixModal />
    </div>
  )
}
