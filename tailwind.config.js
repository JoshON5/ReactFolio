/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'system-ui']
      },
      colors: {
        'raspberry': '#B4436C',
        'saffron': '#F2C14E',
        'mantis': '#5FAD56',
        'coral': '#F78154',
        'viridian': '#4D9078'
      }
    },
  },
  plugins: [],
}

