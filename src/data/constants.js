export const API_URL = 'https://glamping-server-production.up.railway.app'

export const houses = [
  {
    id: 1,
    name: 'A-frame «Сосна»',
    price: 6000,
    img: '/images/house-1.png',
    desc: 'Уютный домик для двоих с панорамным окном и камином.',
  },
  {
    id: 2,
    name: 'A-frame «Кедр»',
    price: 8500,
    img: '/images/house-2.png',
    desc: 'Просторный домик для семьи, терраса с видом на лес.',
  },
  {
    id: 3,
    name: 'Шатёр «Поляна»',
    price: 4500,
    img: '/images/house-3.png',
    desc: 'Глэмпинг-шатёр с мягкой кроватью и видом на звёзды.',
  },
]

export const extras = [
  { id: 'breakfast', name: 'Завтрак', price: 500, perNight: true },
  { id: 'sauna', name: 'Баня', price: 2000, perNight: false },
  { id: 'transfer', name: 'Трансфер', price: 1500, perNight: false },
]

export const weatherIcons = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  61: '🌦️',
  63: '🌧️',
  65: '🌧️',
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  80: '🌧️',
  81: '🌧️',
  82: '⛈️',
}

export const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
