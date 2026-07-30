let initialized = false

export function initCursorGlow() {
  if (initialized || typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (window.matchMedia('(pointer: coarse)').matches) return

  initialized = true
  const glow = document.createElement('div')
  glow.id = 'cursor-glow'
  glow.setAttribute('aria-hidden', 'true')
  glow.style.cssText = `
    position: fixed; width: 400px; height: 400px; border-radius: 50%;
    pointer-events: none; z-index: 9999; mix-blend-mode: screen;
    background: radial-gradient(circle, rgba(212,165,116,0.07) 0%, transparent 70%);
    transform: translate(-50%, -50%); transition: opacity 0.3s; opacity: 0;
  `
  document.body.appendChild(glow)

  let visible = false
  document.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`
    glow.style.top = `${e.clientY}px`
    if (!visible) { glow.style.opacity = '1'; visible = true }
  })
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; visible = false })
}
