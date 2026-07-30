import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Phone, User } from 'lucide-react'
import { houses } from '../data/constants'
import { submitBooking } from '../lib/api'

const today = new Date().toISOString().split('T')[0]

export default function BookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [house, setHouse] = useState(houses[0].name)
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const next = {}
    if (name.length < 2) next.name = 'Введите имя'
    if (phone.replace(/\D/g, '').length < 10) next.phone = 'Введите корректный телефон'
    if (!dateFrom || !dateTo) next.date = 'Выберите даты'
    else if (dateFrom < today) next.date = 'Дата заезда не может быть в прошлом'
    else if (dateTo <= dateFrom) next.date = 'Дата выезда должна быть позже заезда'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    if (!validate()) return
    setLoading(true)
    try {
      const data = await submitBooking({ name, phone, house, dateFrom, dateTo })
      if (data.ok) {
        setStatus('success')
        setName(''); setPhone(''); setDateFrom(''); setDateTo(''); setHouse(houses[0].name)
      } else setStatus('error')
    } catch { setStatus('error') }
    finally { setLoading(false) }
  }

  return (
    <section id="booking" className="relative bg-surface px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(212,165,116,0.05)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-lg">
        <div className="mb-10">
          <p className="label-tag mb-4">Бронирование</p>
          <h2 className="font-display text-4xl font-medium text-fog sm:text-5xl">Забронировать</h2>
          <p className="mt-4 text-dim">Оставьте заявку — свяжемся и подтвердим бронь</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit} className="card-dark space-y-5 p-8">

          <label className="block">
            <span className="mb-2 block text-sm text-dim">Ваше имя</span>
            <div className="relative">
              <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dim" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" autoComplete="name" className="input-dark pl-12" />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-dim">Телефон</span>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dim" />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (999) 123-45-67" autoComplete="tel" className="input-dark pl-12" />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-dim">Домик</span>
            <select value={house} onChange={(e) => setHouse(e.target.value)} className="input-dark">
              {houses.map((h) => <option key={h.id} value={h.name}>{h.name}</option>)}
            </select>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm text-dim"><CalendarDays className="h-4 w-4" /> Заезд</span>
              <input type="date" value={dateFrom} min={today} onChange={(e) => setDateFrom(e.target.value)} className="input-dark" />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm text-dim"><CalendarDays className="h-4 w-4" /> Выезд</span>
              <input type="date" value={dateTo} min={today} onChange={(e) => setDateTo(e.target.value)} className="input-dark" />
            </label>
          </div>
          {errors.date && <p className="text-sm text-red-400">{errors.date}</p>}

          <motion.button type="submit" disabled={loading} whileTap={{ scale: 0.98 }} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Отправляем…' : 'Отправить заявку'}
          </motion.button>

          {status === 'success' && <p className="text-center text-sm text-gold">Заявка отправлена! Свяжемся с вами.</p>}
          {status === 'error' && <p className="text-center text-sm text-red-400">Ошибка отправки. Попробуйте позже.</p>}
        </motion.form>
      </div>
    </section>
  )
}
