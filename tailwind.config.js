/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#456EFE",
        secondary: "#F59E0B",
        tertiary: "#10B981",
      },
    },
  },
  plugins: [],
};
