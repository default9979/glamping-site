import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { RetroGrid } from './ui/RetroGrid'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-night">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-ken-burns absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.85] saturate-[0.9]"
          style={{ backgroundImage: 'url(/images/hero-forest.png)' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-transparent to-night" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(3,3,3,0.9)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,165,116,0.06)_0%,transparent_50%)]" />

      <RetroGrid opacity={0.25} lineColor="#1f1f1f" cellSize={50} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-36 md:flex-row md:items-end md:justify-between md:pb-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="label-tag mb-8 w-fit">
            Тишина и красота
            <ChevronRight className="h-3.5 w-3.5 text-gold" />
          </h2>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-fog sm:text-7xl lg:text-[5.5rem]">
            Уединённый
            <br />
            <span className="text-gradient-gold italic">отдых в лесу</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim sm:text-xl">
            A-frame домики в глубине бора. Тёплый янтарный свет в окнах, туман над
            соснами и абсолютная тишина — как будто мир остановился.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#booking" className="btn-primary">
              Забронировать
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#houses" className="btn-ghost">Смотреть домики</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden gap-12 md:flex"
        >
          {[
            { value: '3', label: 'формата размещения' },
            { value: '100%', label: 'приватность' },
            { value: '5★', label: 'уровень комфорта' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl font-light text-fog">{stat.value}</div>
              <div className="mt-2 max-w-[100px] text-xs uppercase tracking-wider text-dim">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>
        <div className="h-10 w-6 rounded-full border border-line p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold/70" />
        </div>
      </motion.div>
    </section>
  )
}
