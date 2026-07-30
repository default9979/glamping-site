import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { dayNames, weatherIcons } from '../data/constants'
import { fetchWeather } from '../lib/api'
import { LiquidGlassCard } from './ui/LiquidGlassCard'

export default function WeatherSection() {
  const [days, setDays] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWeather()
      .then((data) => {
        setDays(data.daily.time.map((time, i) => ({
          date: new Date(time),
          max: Math.round(data.daily.temperature_2m_max[i]),
          min: Math.round(data.daily.temperature_2m_min[i]),
          icon: weatherIcons[data.daily.weather_code[i]] || '🌡️',
        })))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="weather" className="relative bg-surface px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,165,116,0.03)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="label-tag mb-4">Прогноз</p>
          <h2 className="font-display text-4xl font-medium text-fog sm:text-5xl">Погода в глэмпинге</h2>
          <p className="mt-4 text-dim">Карелия, экопарк «Лесной»</p>
        </div>

        {loading && <p className="text-dim">Загружаем погоду...</p>}
        {error && <p className="text-red-400/80">Не удалось загрузить погоду</p>}

        {days && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <LiquidGlassCard className="col-span-full p-1 text-fog sm:col-span-1 lg:col-span-1" borderRadius="20px" glowIntensity="sm">
              <div className="rounded-[18px] bg-elevated/60 p-6">
                <div className="font-display text-6xl font-semibold text-fog">{days[0].max}°</div>
                <div className="mt-2 text-dim">{days[0].icon} Сегодня · +{days[0].max}° / {days[0].min}°</div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-night px-3 py-1.5 text-sm text-dim">
                  <MapPin className="h-4 w-4 text-gold" />
                  Карелия
                </div>
              </div>
            </LiquidGlassCard>

            <LiquidGlassCard className="col-span-full p-1 lg:col-span-2" borderRadius="20px">
              <div className="rounded-[18px] bg-elevated/60 p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                  {days.map((day, i) => (
                    <motion.div key={day.date.toISOString()} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                      className="flex flex-col items-center gap-2 rounded-xl p-3 text-center">
                      <span className="text-xs text-dim">{i === 0 ? 'Сегодня' : dayNames[day.date.getDay()]}</span>
                      <span className="text-2xl">{day.icon}</span>
                      <span className="text-lg font-medium text-fog">{day.max}°</span>
                      <span className="text-[11px] text-dim">ночью {day.min}°</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        )}
      </div>
    </section>
  )
}
