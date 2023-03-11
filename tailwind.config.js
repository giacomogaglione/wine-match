const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} \*/

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {    
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
}
