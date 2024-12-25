/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },

    extend: {
      fontFamily: {
        sans: ['"Fira Code Regular"', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
