import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { houses } from '../data/constants'
import HouseModal from './HouseModal'

export default function HousesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalHouse, setModalHouse] = useState(null)
  const shouldReduceMotion = useReducedMotion()
  const slide = houses[currentIndex]

  const imageVariants = useMemo(() => {
    if (shouldReduceMotion) return { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    return { enter: { opacity: 0, scale: 1.02 }, center: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.98 } }
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
    <section id="houses" className="bg-night px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="label-tag mb-4">Размещение</p>
          <h2 className="font-display text-4xl font-medium text-fog sm:text-5xl">Наши домики</h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-dark overflow-hidden">
          <div className="relative h-[420px] overflow-hidden sm:h-[480px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img key={slide.id} src={slide.img} alt={slide.name} variants={imageVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                className="absolute h-full w-full object-cover brightness-90" />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />

            <button type="button" onClick={() => paginate(-1)} className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-night/60 backdrop-blur-md transition hover:border-gold/30" aria-label="Предыдущий">
              <ChevronLeft className="h-5 w-5 text-fog" />
            </button>
            <button type="button" onClick={() => paginate(1)} className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-night/60 backdrop-blur-md transition hover:border-gold/30" aria-label="Следующий">
              <ChevronRight className="h-5 w-5 text-fog" />
            </button>
          </div>

          <div className="border-t border-line p-8 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={slide.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-3xl text-fog">{slide.name}</h3>
                    <p className="mt-3 max-w-xl text-dim">{slide.desc}</p>
                  </div>
                  <p className="font-display text-3xl text-gold">
                    от {slide.price.toLocaleString('ru-RU')} ₽
                    <span className="text-base text-dim"> / ночь</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setModalHouse(slide)} className="btn-ghost !h-10 !px-5 !text-xs">
                <Info className="h-4 w-4" />
                Подробнее
              </button>
              <div className="flex items-center gap-2">
                {houses.map((h, index) => (
                  <button key={h.id} type="button" onClick={() => setCurrentIndex(index)}
                    className={`h-1 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-gold' : 'w-1.5 bg-line hover:bg-dim'}`}
                    aria-label={h.name} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {modalHouse && <HouseModal house={modalHouse} onClose={() => setModalHouse(null)} />}
    </section>
  )
}
