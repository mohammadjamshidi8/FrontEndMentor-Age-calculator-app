/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: '#854dff',
        lightRed: '#ff5757',
        offWhite: '#f0f0f0',
        lightGrey: '#dbdbdb',
        smokey: '#716f6f',
        offBlack: '#141414',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

