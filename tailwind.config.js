/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Dsansarb: ["Dsansarb", "cursive"],
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('flowbite/plugin')
  ],
}
