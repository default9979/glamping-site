import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initCursorGlow } from './effects/cursorGlow.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)

initCursorGlow()
