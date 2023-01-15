const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Yekan Bakh FaNum", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
