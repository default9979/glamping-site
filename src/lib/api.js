import { API_URL } from '../data/constants'

export async function fetchWeather() {
  const response = await fetch(`${API_URL}/weather`)
  if (!response.ok) throw new Error('Weather fetch failed')
  return response.json()
}

export async function submitBooking(payload) {
  const response = await fetch(`${API_URL}/booking`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return response.json()
}
