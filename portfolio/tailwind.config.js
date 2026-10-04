/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#080c1a',
          900: '#0b1020',
          800: '#111831',
          700: '#1a2342',
        },
        violet: { 450: '#8b6cf6' },
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(24px,-18px,0) scale(1.06)' },
        },
        caret: { '0%, 49%': { opacity: 1 }, '50%, 100%': { opacity: 0 } },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 20s ease-in-out infinite reverse',
        caret: 'caret 1s steps(1) infinite',
        rise: 'rise .8s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}
