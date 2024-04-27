/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "rojo1": "#b24c52",
          "rosa1": "#d7a2a5",
          "negro": "#1c0c0d",
          "marron1": "#998270",
          "marron2": "#bbaa9c",
          "gris1": "#CCCCCC",
          "gris2": "#EDEDED",
          "azul": "#5B9FA9"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

