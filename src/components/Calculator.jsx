import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { houses, extras } from '../data/constants'

export default function Calculator() {
  const [houseIndex, setHouseIndex] = useState(0)
  const [nights, setNights] = useState(1)
  const [selectedExtras, setSelectedExtras] = useState([])

  const total = useMemo(() => {
    if (nights < 1) return null
    let sum = houses[houseIndex].price * nights
    selectedExtras.forEach((id) => {
      const extra = extras.find((e) => e.id === id)
      if (extra) sum += extra.perNight ? extra.price * nights : extra.price
    })
    return sum
  }, [houseIndex, nights, selectedExtras])

  return (
    <section id="calc" className="bg-night px-6 py-28">
      <div className="mx-auto max-w-lg">
        <div className="mb-10">
          <p className="label-tag mb-4">Калькулятор</p>
          <h2 className="font-display text-4xl font-medium text-fog">Рассчитать стоимость</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-dark space-y-5 p-8"
        >
          <label className="block">
            <span className="mb-2 block text-sm text-dim">Домик</span>
            <select value={houseIndex} onChange={(e) => setHouseIndex(Number(e.target.value))} className="input-dark">
              {houses.map((h, i) => (
                <option key={h.id} value={i}>{h.name} — {h.price.toLocaleString('ru-RU')} ₽/ночь</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-dim">Количество ночей</span>
            <input type="number" min="1" value={nights} onChange={(e) => setNights(Number(e.target.value))} className="input-dark" />
          </label>

          <div>
            <span className="mb-3 block text-sm text-dim">Дополнительно</span>
            <div className="space-y-2">
              {extras.map((extra) => (
                <label key={extra.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-night/50 px-4 py-3 transition hover:border-gold/20">
                  <input type="checkbox" checked={selectedExtras.includes(extra.id)}
                    onChange={() => setSelectedExtras((p) => p.includes(extra.id) ? p.filter((x) => x !== extra.id) : [...p, extra.id])}
                    className="h-4 w-4 accent-gold" />
                  <span className="text-sm text-fog">{extra.name} <span className="text-dim">(+{extra.price} ₽{extra.perNight ? '/ночь' : ''})</span></span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-elevated px-6 py-5 text-center">
            {total === null ? (
              <p className="text-dim">Введите хотя бы 1 ночь</p>
            ) : (
              <p className="font-display text-2xl text-gold">Итого: {total.toLocaleString('ru-RU')} ₽ за {nights} ноч.</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
