// Adapted from 21st: moumensoliman/image-slider-card-shadcnui
import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { houses } from '../data/constants'

export default function HousesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const slide = houses[currentIndex]

  const imageVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    }
    return {
      enter: { opacity: 0, scale: 0.98 },
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    }
  }, [shouldReduceMotion])

  const paginate = (dir) => {
    setCurrentIndex((prev) => {
      const next = prev + dir
      if (next < 0) return houses.length - 1
      if (next >= houses.length) return 0
      return next
    })
  }

  return (
    <section id="houses" className="bg-forest-950 px-6 py-28 text-cream">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gold">Размещение</p>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">Наши домики</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-forest-900/50 shadow-2xl"
          role="group"
          aria-roledescription="carousel"
          aria-label="Карусель домиков"
        >
          <div className="relative h-[420px] overflow-hidden sm:h-[480px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={slide.id}
                src={slide.img}
                alt={slide.name}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                className="absolute h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/20" />

            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-forest-950/50 backdrop-blur-md transition hover:bg-forest-900/70"
              aria-label="Предыдущий домик"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-forest-950/50 backdrop-blur-md transition hover:bg-forest-900/70"
              aria-label="Следующий домик"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="border-t border-white/10 p-8 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-3xl">{slide.name}</h3>
                    <p className="mt-3 max-w-xl text-cream/70">{slide.desc}</p>
                  </div>
                  <p className="font-display text-3xl text-gold">
                    от {slide.price.toLocaleString('ru-RU')} ₽
                    <span className="text-base text-cream/50"> / ночь</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-2">
              {houses.map((h, index) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-gold' : 'w-1.5 bg-white/25 hover:bg-white/40'
                  }`}
                  aria-label={`Домик ${h.name}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
