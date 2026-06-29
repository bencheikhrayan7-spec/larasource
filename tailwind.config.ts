import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1D4ED8',
        'accent-blue': '#3B82F6',
        'electric-cyan': '#38BDF8',
        'deep-navy': '#0A2540',
        'text-dark': '#0F172A',
        'text-muted': '#5B6B82',
        'surface-light': '#F5F8FF',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1D4ED8 0%, #38BDF8 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        shine: {
          '0%': { left: '-75%' },
          '100%': { left: '125%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        blob: 'blob 7s infinite',
        shine: 'shine 2.5s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out infinite 1s',
        'float-delay2': 'float 4s ease-in-out infinite 2s',
      },
    },
  },
  plugins: [],
}
export default config
