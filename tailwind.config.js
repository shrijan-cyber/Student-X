/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2E8BFD',
        secondary: '#89CFF0',
        accent: '#A9D6E5',
        light: {
          background: '#F8FAFC',
          card: 'rgba(255, 255, 255, 0.8)',
          text: '#0F172A',
          glass: 'rgba(255, 255, 255, 0.6)',
        },
        dark: {
          background: '#0D1117',
          card: 'rgba(20, 20, 25, 0.8)',
          text: '#E6EDF3',
          accent: '#1F6FEB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
