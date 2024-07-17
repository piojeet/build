/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px"
    },

    extend: {
      colors: {
        bodyColor: "#f3f4f6",
        lightGray: "#e5e7eb",
        primaryButton: "#FAA61A"
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