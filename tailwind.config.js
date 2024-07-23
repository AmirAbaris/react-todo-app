/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic-purple': '#0D0714',
        'shadow-night': '#15101C',
        'lavender-blush': '#9E78CF',
        'royal-purple': '#3E1671',
        'minty-fresh': '#78CFB0'
      }
    },
  },
  plugins: [],
}