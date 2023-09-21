/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#48311F",
        secondary: "#91AB44",
        text: "#DAA980",
        third: "#A08E8D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
}