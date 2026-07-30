import { cn } from '../../data/constants'

export function BentoGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className={cn(
            'group relative overflow-hidden rounded-2xl border border-line bg-elevated p-6 transition-all duration-300',
            'hover:-translate-y-0.5 hover:border-gold/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
            item.colSpan === 2 && 'md:col-span-2',
          )}
        >
          <div className="relative flex flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-night text-gold">
              {item.icon}
            </div>
            <div>
              <h3 className="font-display text-xl text-fog">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{item.description}</p>
            </div>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-line bg-night px-2 py-0.5 text-[11px] text-dim">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
