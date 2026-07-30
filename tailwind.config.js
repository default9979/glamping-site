/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0a120e',
          900: '#0f1a14',
          800: '#1a2e22',
          700: '#243d2e',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          muted: '#e8e0d4',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#dfc998',
          dark: '#a8864a',
        },
        sage: {
          DEFAULT: '#8fa88a',
          light: '#b4c9af',
        },
        frost: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'snow-fall': 'snowFall 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        snowFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 0.6 },
          '100%': { transform: 'translateY(110vh) translateX(20px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
