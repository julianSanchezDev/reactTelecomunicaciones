/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

//https://www.tienda.ofit.com.ar/listado/hogar-muebles-jardin/seguridad-hogar/sistemas-monitoreo/