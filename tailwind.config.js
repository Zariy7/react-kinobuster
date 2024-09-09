/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    flowbite.content(),
    // "./src/**/*.{js,jsx,ts,tsx}",
    //'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      maxWidth: {
        'bs-sm': `${540 / 16}rem`,
        'bs-md': `${720 / 16}rem`,
        'bs-lg': `${960 / 16}rem`,
        'bs-xl': `${1140 / 16}rem`,
        'bs-xxl': `${1320 / 16}rem`,
      },
    },
    /* colors: {
      yellow: {
        100: '#ffbf01',
        200: '#ffcc34',
        300: '#ffd967',
        400: '#ffe599',
        500: '#fff2cc',
      },
      blue: {
        100: '#0d3fa9',
        200: '#3d65ba',
        300: '#6e8ccb',
        400: '#9eb2dd',
        500: '#cfd9ee',
      },
    }, */
  },
  plugins: [
    //require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

