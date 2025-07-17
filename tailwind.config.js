/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:  "#8557FF", // mor (buton)
        secondary:"#3B42C4", // koyu mavi
        tertiary: "#7DEFC1", // turkuaz
        accent:   "#000000"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}
