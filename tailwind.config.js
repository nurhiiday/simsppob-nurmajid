/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      baclgroundImage: {
        'background-saldo': "url('/assets/BackgroundSaldo.png')"
      }
    },
  },
  plugins: [],
}

