import { motion } from 'framer-motion'
import { Flame, Eye, VolumeX, Sparkles } from 'lucide-react'
import { BentoGrid } from './ui/BentoGrid'

const items = [
  {
    title: 'Панорамные окна',
    description: 'Лес на весь обзор — с рассвета до звёздного неба. Ни одной стены между вами и природой.',
    icon: <Eye className="h-5 w-5" />,
    tags: ['вид', 'панорама'],
    colSpan: 2,
  },
  {
    title: 'Камин и баня',
    description: 'Тепло после прогулок по зимнему лесу. Баня на дровах — по запросу.',
    icon: <Flame className="h-5 w-5" />,
    tags: ['комфорт'],
  },
  {
    title: 'Абсолютная тишина',
    description: 'Никаких соседей, дорог и городского шума. Только ветер в кронах и треск дров.',
    icon: <VolumeX className="h-5 w-5" />,
    tags: ['уединение'],
  },
  {
    title: 'Премиальный сервис',
    description: 'Завтраки, трансфер, организация активностей — всё под ваш ритм отдыха.',
    icon: <Sparkles className="h-5 w-5" />,
    tags: ['сервис', 'забота'],
    colSpan: 2,
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-surface px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,165,116,0.04)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
          <p className="label-tag mb-6">О месте</p>
          <h2 className="font-display text-4xl font-medium text-fog sm:text-5xl">
            Пространство, где <span className="text-gradient-gold">время замедляется</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-dim">
            Лесной глэмпинг — уютные A-frame домики среди сосен в Карелии.
            Панорамные окна, тёплый свет вечером и полная тишина вокруг.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <BentoGrid items={items} />
        </motion.div>
      </div>
    </section>
  )
}
