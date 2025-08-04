/**
 * tailwind.config.js
 * Tailwind CSS configuration with custom color palette and transition duration.
 *
 * Author: Yumi Takuma
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      blue: "#3A4E77",
      "dark-blue": "#2D3C5A",
      "dark-red": "#731E16",
      "light-yellow": "#F6DEC0",
      orange: "#F27B50",
      red: "#D93D3D",
      transparent: "transparent",
      yellow: "#F2C48D",
      white: "#FFFFFF",
    },
    extend: {
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [],
};
