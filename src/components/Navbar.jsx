// Adapted from 21st: sshahaider/floating-header
import { useState } from 'react'
import { Menu, Trees, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../data/constants'

const links = [
  { label: 'О месте', href: '#about' },
  { label: 'Домики', href: '#houses' },
  { label: 'Погода', href: '#weather' },
  { label: 'Бронь', href: '#booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          'mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/15 px-4 py-2.5 shadow-lg',
          'bg-forest-900/55 backdrop-blur-xl supports-[backdrop-filter]:bg-forest-900/45',
        )}
      >
        <a href="#" className="flex items-center gap-2 text-cream">
          <Trees className="h-5 w-5 text-gold" />
          <span className="font-display text-lg font-semibold tracking-wide">Лесной глэмпинг</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm text-cream/80 transition hover:bg-white/10 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-2 rounded-xl bg-gold px-4 py-2 text-sm font-medium text-forest-950 transition hover:bg-gold-light"
          >
            Забронировать
          </a>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/15 p-2 text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/15 bg-forest-900/90 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-cream/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gold px-4 py-3 text-center font-medium text-forest-950"
              >
                Забронировать
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
