// Adapted from 21st: uilayout.contact/liquid-weather-glass
import { motion } from 'framer-motion'
import { cn } from '../data/constants'

const blurClasses = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
}

const shadowStyles = {
  xs: 'inset 2px 2px 2px 0 rgba(255,255,255,0.25), inset -2px -2px 2px 0 rgba(255,255,255,0.15)',
  sm: 'inset 3px 3px 3px 0 rgba(255,255,255,0.35), inset -3px -3px 3px 0 rgba(255,255,255,0.2)',
  md: 'inset 4px 4px 4px 0 rgba(255,255,255,0.4), inset -4px -4px 4px 0 rgba(255,255,255,0.25)',
}

const glowStyles = {
  none: '0 4px 20px rgba(0,0,0,0.15)',
  sm: '0 4px 24px rgba(0,0,0,0.2), 0 0 32px rgba(201,169,110,0.08)',
  md: '0 8px 32px rgba(0,0,0,0.25), 0 0 48px rgba(201,169,110,0.12)',
}

export function LiquidGlassCard({
  children,
  className = '',
  blurIntensity = 'xl',
  shadowIntensity = 'sm',
  borderRadius = '24px',
  glowIntensity = 'sm',
}) {
  return (
    <>
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="120" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <motion.div
        className={cn('relative overflow-hidden', className)}
        style={{ borderRadius }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <div
          className={cn('absolute inset-0 z-0', blurClasses[blurIntensity])}
          style={{ borderRadius, filter: 'url(#glass-blur)' }}
        />
        <div className="absolute inset-0 z-10" style={{ borderRadius, boxShadow: glowStyles[glowIntensity] }} />
        <div className="absolute inset-0 z-20" style={{ borderRadius, boxShadow: shadowStyles[shadowIntensity] }} />
        <div className="relative z-30">{children}</div>
      </motion.div>
    </>
  )
}
