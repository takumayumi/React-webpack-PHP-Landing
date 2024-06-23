/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000", // main
      "black-100": "#111518",
      "black-200": "#0F1B25",
      blue: "#516DA6", // main
      "blue-100": "#0F4BCC",
      "blue-200": "#5A93FC",
      "blue-300": "#3A4F66",
      "dark-blue": "#415784", // main
      "dark-red": "#731E16", // main
      gray: "#8F969E",
      "gray-100": "#3A4F66",
      "gray-200": "#656565",
      "light-yellow": "#F6DEC0", // main
      orange: "#F27B50", // main
      red: "#D93D3D", // main
      transparent: "transparent", // main
      yellow: "#F2C48D", // main
      white: "#FFFFFF", // main
      "white-100": "#E1E8ED",
    },
    extend: {
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [],
};
