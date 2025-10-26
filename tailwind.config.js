/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7c5cff',
          50: '#f2ecff',
          100: '#e5d9ff',
          200: '#cbb3ff',
          300: '#b08dff',
          400: '#9667ff',
          500: '#7c5cff',
          600: '#6a3fff',
          700: '#5527f5',
          800: '#4521c7',
          900: '#371b9a',
        },
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0,0,0,0.1)',
        neo: '8px 8px 20px rgba(0,0,0,0.35), -8px -8px 20px rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'slow-bounce': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
