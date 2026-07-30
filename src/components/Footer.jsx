export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-night">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-fog">Лесной глэмпинг</h3>
          <p className="mt-3 text-sm leading-relaxed text-dim">Уединённый отдых на природе с комфортом премиум-класса.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-dim">Контакты</h4>
          <p className="text-sm"><a href="tel:+79991234567" className="text-fog transition hover:text-gold">+7 (999) 123-45-67</a></p>
          <p className="mt-2 text-sm"><a href="https://t.me/yourglamping" target="_blank" rel="noreferrer" className="text-dim transition hover:text-gold">Telegram</a></p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-dim">Расположение</h4>
          <p className="text-sm leading-relaxed text-dim">Республика Карелия,<br />экопарк «Лесной»</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-dim">Меню</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[['О месте', '#about'], ['Домики', '#houses'], ['Погода', '#weather'], ['Бронь', '#booking']].map(([label, href]) => (
              <a key={href} href={href} className="text-dim transition hover:text-gold">{label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-dim">
        © 2026 Лесной глэмпинг. Все права защищены.
      </div>
    </footer>
  )
}
