import { cn } from '../../data/constants'

export function RetroGrid({ angle = 65, cellSize = 60, opacity = 0.35, lineColor = '#2a2a2a' }) {
  const gridStyles = {
    '--grid-angle': `${angle}deg`,
    '--cell-size': `${cellSize}px`,
    '--opacity': opacity,
    '--line-color': lineColor,
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[var(--opacity)] [perspective:200px]"
      style={gridStyles}
      aria-hidden="true"
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid absolute inset-0 [background-image:linear-gradient(to_right,var(--line-color)_1px,transparent_0),linear-gradient(to_bottom,var(--line-color)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [margin-left:-200%] [width:600vw]"
          style={{ inset: '0% 0px', transformOrigin: '100% 0 0' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-90%" />
    </div>
  )
}
