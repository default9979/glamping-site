// Adapted from 21st: minhxthanh/hero-landing-page + mokshithcodez/modern-landing-hero
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

function Snowflake({ style }) {
  return (
    <span
      className="pointer-events-none absolute rounded-full bg-white/50 blur-[1px]"
      style={style}
      aria-hidden="true"
    />
  )
}

const flakes = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  size: `${2 + (i % 4)}px`,
  delay: `${(i % 8) * 1.2}s`,
  duration: `${10 + (i % 6) * 2}s`,
}))

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-forest.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/50 to-forest-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,169,110,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(143,168,138,0.12),transparent_45%)]" />

      {flakes.map((f) => (
        <Snowflake
          key={f.id}
          style={{
            left: f.left,
            width: f.size,
            height: f.size,
            animation: `snowFall ${f.duration} linear ${f.delay} infinite`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-36 md:flex-row md:items-end md:justify-between md:pb-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-cream/90 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold" />
            <span>Карелия · зима и ранняя весна</span>
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-7xl lg:text-8xl">
            Уединённый
            <br />
            <span className="text-gradient-gold italic">отдых в лесу</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
            Тишина соснового бора, тёплый свет в окнах A-frame домиков и первый
            весенний воздух над белыми просторами Карелии.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-8 text-sm font-semibold text-forest-950 transition hover:bg-gold-light active:scale-[0.98]"
            >
              Забронировать
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#houses"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 text-sm font-medium text-cream backdrop-blur-sm transition hover:bg-white/10 active:scale-[0.98]"
            >
              Смотреть домики
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden gap-10 md:flex"
        >
          {[
            { value: '3', label: 'формата\nразмещения' },
            { value: '24/7', label: 'тишина\nи природа' },
            { value: '−18°', label: 'средняя\nвесной' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl font-light text-cream">{stat.value}</div>
              <div className="mt-2 whitespace-pre-line text-sm text-cream/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <div className="h-10 w-6 rounded-full border border-white/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold/80" />
        </div>
      </motion.div>
    </section>
  )
}
