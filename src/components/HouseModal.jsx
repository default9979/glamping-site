import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, MapPin } from 'lucide-react'

export default function HouseModal({ house, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!house) return null

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="absolute inset-0 bg-night/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="house-modal-title"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-elevated shadow-2xl"
        >
          <div className="relative h-52 sm:h-64">
            <img src={house.img} alt={house.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-elevated to-transparent" />
            <button type="button" onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-night/70 backdrop-blur-md" aria-label="Закрыть">
              <X className="h-4 w-4 text-fog" />
            </button>
          </div>
          <div className="p-6 sm:p-8">
            <h2 id="house-modal-title" className="font-display text-3xl text-fog">{house.name}</h2>
            <p className="mt-1 font-display text-xl text-gold">от {house.price.toLocaleString('ru-RU')} ₽ <span className="text-base text-dim">/ ночь</span></p>
            <p className="mt-4 text-sm leading-relaxed text-dim">{house.fullDesc}</p>
            <div className="mt-3 flex items-start gap-2 text-sm text-dim">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{house.address}</span>
            </div>
            <h3 className="mt-6 mb-3 text-xs font-medium uppercase tracking-wider text-dim">Что входит</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {house.amenities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-fog">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" onClick={onClose} className="btn-primary flex-1 text-center">Забронировать</a>
              <button type="button" onClick={onClose} className="btn-ghost flex-1">Закрыть</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
