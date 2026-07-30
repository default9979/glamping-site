/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#030303',
        surface: '#0a0a0a',
        elevated: '#111111',
        line: '#1a1a1a',
        dim: '#737373',
        fog: '#a3a3a3',
        gold: {
          DEFAULT: '#d4a574',
          light: '#e8c9a0',
          dim: '#8b6914',
        },
        copper: '#b87333',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        grid: 'grid 30s linear infinite',
        'ken-burns': 'kenBurns 28s ease-in-out infinite alternate',
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(var(--cell-size) * 2))' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
