/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A1E1E",
        darkRed: "#4E1414",
        gold: "#D4A373",
        cream: "#FAF7F2",
      },
    },
  },
  plugins: [],
};