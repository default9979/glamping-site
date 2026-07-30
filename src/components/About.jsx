import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream px-6 py-28">
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-dark"
        >
          О месте
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl font-medium text-forest-900 sm:text-5xl"
        >
          Пространство, где время замедляется
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-forest-800/70"
        >
          Лесной глэмпинг — место, где можно выдохнуть. Уютные A-frame домики среди
          сосен, панорамные окна с видом на лес, тёплый свет вечером и полная тишина
          вокруг. Природа рядом, а комфорт — как дома.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {[
            { title: 'Панорамные окна', text: 'Лес прямо из кровати' },
            { title: 'Камин и баня', text: 'Тепло после прогулок' },
            { title: 'Полная тишина', text: 'Без соседей и шума' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-forest-800/10 bg-white/60 p-6 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl text-forest-900">{item.title}</h3>
              <p className="mt-2 text-sm text-forest-800/60">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
