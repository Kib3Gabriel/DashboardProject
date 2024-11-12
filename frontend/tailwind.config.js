// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A15",
        "purple": "#7e5bef", 
        "indigo":"rgb(49 46 129)",
        "custom-red":"rgb(159 18 57)",
        "light-white":"rgb(245, 245, 245)",
      }
    },
  },
  plugins: [],
}
