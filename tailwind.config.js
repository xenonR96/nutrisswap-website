/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#10b981',
          'primary-hover': '#0d9668',
          good: '#34C759',
          lightGreen: '#32CD32',
          limit: '#FF9500',
          avoid: '#EF4444',
          blue: '#007AFF',
          lightBlue: '#5AC8FA',
          yellow: '#FFCC00',
          muted: '#8E8E93',
          background: '#F2F2F2',
        },
      },
      fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      boxShadow: {
        card: '0 4px 16px rgba(0, 0, 0, 0.14)',
      },
      borderRadius: {
        card: '18px',
      },
    },
  },
  plugins: [],
};
