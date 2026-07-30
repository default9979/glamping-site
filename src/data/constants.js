export const API_URL = 'https://glamping-server-production.up.railway.app'

export const houses = [
  {
    id: 1,
    name: 'A-frame «Сосна»',
    price: 6000,
    img: '/images/house-1.png',
    desc: 'Уютный домик для двоих с панорамным окном и камином.',
    fullDesc: 'Компактный A-frame в глубине соснового бора. Идеален для романтического уикенда.',
    amenities: ['Панорамное окно', 'Камин', 'Двуспальная кровать', 'Мини-кухня', 'Душевая', 'Wi‑Fi', 'Терраса'],
    address: 'Республика Карелия, Ладва, ул. Лесная, 7',
    coords: [34.348, 61.782],
  },
  {
    id: 2,
    name: 'A-frame «Кедр»',
    price: 8500,
    img: '/images/house-2.png',
    desc: 'Просторный домик для семьи, терраса с видом на лес.',
    fullDesc: 'Самый просторный A-frame — для семьи до 4 человек. Большая терраса и камин.',
    amenities: ['2 спальни', 'Камин', 'Большая терраса', 'Полная кухня', 'Душевая + ванна', 'Wi‑Fi', 'Барбекю', 'Парковка'],
    address: 'Республика Карелия, Ладва, ул. Сосновая, 14',
    coords: [34.355, 61.776],
  },
  {
    id: 3,
    name: 'Шатёр «Поляна»',
    price: 4500,
    img: '/images/house-3.png',
    desc: 'Глэмпинг-шатёр с мягкой кроватью и видом на звёзды.',
    fullDesc: 'Атмосферный шатёр на опушке с прозрачной крышей для наблюдения за звёздами.',
    amenities: ['Кровать king-size', 'Обогреватель', 'Халаты', 'Завтрак в шатёр', 'Wi‑Fi', 'Вид на поляну'],
    address: 'Республика Карелия, Ладва, поляна «Звёздная», уч. 3',
    coords: [34.341, 61.788],
  },
  {
    id: 4,
    name: 'A-frame «Берёза»',
    price: 7200,
    img: '/images/house-2.png',
    desc: 'Домик у озера с сауной и приватным пирсом.',
    fullDesc: 'A-frame на берегу лесного озера с собственной сауной и пирсом.',
    amenities: ['Сауна', 'Приватный пирс', 'Лодка', 'Камин', 'Кухня-студия', 'Wi‑Fi', 'Терраса у воды'],
    address: 'Республика Карелия, Ладва, Озёрная наб., 2',
    coords: [34.368, 61.791],
  },
  {
    id: 5,
    name: 'Дом «Озёрный»',
    price: 9500,
    img: '/images/house-1.png',
    desc: 'Премиальный дом для компании до 6 человек.',
    fullDesc: 'Флагманский дом: два этажа, панорамный зал, баня на дровах и веранда.',
    amenities: ['3 спальни', 'Баня на дровах', 'Панорамный зал', 'Полная кухня', '2 санузла', 'Wi‑Fi', 'Веранда 40 м²', 'Мангальная зона'],
    address: 'Республика Карелия, Ладва, ул. Озёрная, 21',
    coords: [34.359, 61.769],
  },
]

export const extras = [
  { id: 'breakfast', name: 'Завтрак', price: 500, perNight: true },
  { id: 'sauna', name: 'Баня', price: 2000, perNight: false },
  { id: 'transfer', name: 'Трансфер', price: 1500, perNight: false },
]

export const weatherIcons = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  61: '🌦️', 63: '🌧️', 65: '🌧️',
  71: '🌨️', 73: '🌨️', 75: '❄️',
  80: '🌧️', 81: '🌧️', 82: '⛈️',
}

export const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getYandexMapUrl(house) {
  const [lng, lat] = house.coords
  return `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=15&l=map&pt=${lng}%2C${lat}%2Cpm2dgl`
}
