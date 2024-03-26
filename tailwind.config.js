/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h4': '25px',
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}

