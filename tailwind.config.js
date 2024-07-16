/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1350px"
    },

    extend: {
      colors: {
        bodyColor: "#f3f4f6",
        lightGray: "#e5e7eb",
        darkGray: "#707070",
        primaryColor: '#F8A531'
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "30px",
      }
    },

    fontFamily: {
      Montserat: ['Montserrat", sans-serif']
    }
  },
  plugins: [],
}