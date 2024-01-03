/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "color-primary": "#000",
      // "color-secondary": "#ffa94d",
      "color-secondary": "#DC84F3",
      "color-secondary-dark": "#b06ac2",
      "color-white": "#fff",
      "color-black-light": "#555",
      "color-gray": "rgba(255,255,255,0.2)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },

  plugins: [rotateY],
  darkMode: "class",
};
