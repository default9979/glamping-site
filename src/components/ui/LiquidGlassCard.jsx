import { motion } from 'framer-motion'
import { cn } from '../../data/constants'

const glowStyles = {
  sm: '0 4px 24px rgba(0,0,0,0.4), 0 0 32px rgba(212,165,116,0.06)',
  md: '0 8px 32px rgba(0,0,0,0.5), 0 0 48px rgba(212,165,116,0.08)',
}

export function LiquidGlassCard({
  children,
  className = '',
  borderRadius = '20px',
  glowIntensity = 'sm',
}) {
  return (
    <motion.div
      className={cn('relative overflow-hidden border border-line bg-elevated/40 backdrop-blur-xl', className)}
      style={{ borderRadius, boxShadow: glowStyles[glowIntensity] }}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  )
}
