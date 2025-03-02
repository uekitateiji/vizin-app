/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx,css}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#456EFE",
        secondary: "#27AE60",
        tertiary: "#10B981",
        danger: "#FF0000",
        base: "#f5f5f5",
        itemBackground: "#bdbdbd",
        border: "#e0e0e0"
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};