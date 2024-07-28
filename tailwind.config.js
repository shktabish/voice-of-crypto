/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#A4ED00"
      },
      fontFamily: {
        "Kodchasan": ["Kodchasan", "sans-serif"],
        "Michroma": ["Michroma", "sans-serif"],
      },
    },
  },
  plugins: [],
}