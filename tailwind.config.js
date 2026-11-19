/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3f9',
          100: '#d4e0ee',
          200: '#a8c1dd',
          300: '#7ba2cc',
          400: '#4e84bb',
          500: '#2f6aa3',
          600: '#1f4f82',
          700: '#123B68',
          800: '#0d2a4a',
          900: '#081c33',
          950: '#04101f',
        },
        gold: {
          50: '#fdf9ee',
          100: '#faf0d4',
          200: '#f4dfa8',
          300: '#edc976',
          400: '#e6b54f',
          500: '#D9A52D',
          600: '#bd8a22',
          700: '#9a6a1d',
          800: '#7c521e',
          900: '#66431d',
        },
        charcoal: '#263447',
        mist: '#F4F6F9',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(18,59,104,0.06), 0 8px 24px -12px rgba(18,59,104,0.12)',
        'card-hover': '0 4px 12px rgba(18,59,104,0.1), 0 24px 48px -16px rgba(18,59,104,0.22)',
        glow: '0 0 0 1px rgba(217,165,45,0.3), 0 8px 30px -8px rgba(217,165,45,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
