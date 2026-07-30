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
      <nav className={cn(
        'mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-line px-4 py-2.5',
        'bg-night/70 backdrop-blur-xl',
      )}>
        <a href="#" className="flex items-center gap-2">
          <Trees className="h-5 w-5 text-gold" />
          <span className="font-display text-lg font-semibold tracking-wide text-fog">Лесной глэмпинг</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-xl px-4 py-2 text-sm text-dim transition hover:text-fog">
              {link.label}
            </a>
          ))}
          <a href="#booking" className="btn-primary ml-2 !h-10 !px-5 !text-xs">Забронировать</a>
        </div>

        <button type="button" className="rounded-xl border border-line p-2 text-fog md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Меню">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-line bg-night/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-fog hover:bg-elevated">{link.label}</a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">Забронировать</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
