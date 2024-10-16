/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        gradient: {
          'primary': '#2a1768',
          'secondary': '#eceef6',
        },
      },
      borderRadius: {
        '50per': '50%',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}


