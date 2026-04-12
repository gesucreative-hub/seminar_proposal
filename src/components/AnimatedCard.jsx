import { motion } from 'framer-motion'

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  style = {},
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 32px rgba(54,30,219,0.15)' } : {}}
      whileTap={{ scale: 0.98 }}
      className={`brand-card ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}
