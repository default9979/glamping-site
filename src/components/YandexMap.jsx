import { getYandexMapUrl } from '../data/constants'

export default function YandexMap({ house }) {
  if (!house) return null

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated">
      <iframe
        title={`Карта — ${house.name}`}
        src={getYandexMapUrl(house)}
        className="min-h-[400px] w-full flex-1 border-0"
        allowFullScreen
        loading="lazy"
      />
      <div className="border-t border-line px-4 py-3">
        <p className="text-xs text-dim">{house.address}</p>
      </div>
    </div>
  )
}
