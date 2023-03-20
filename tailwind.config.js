/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'downbg': '#272727;',
      'downlist': '#363636',
      'MainBackground': '#211F20',
      'light': '#ffff',
      'white': '#ffff',
     }),
     colors: {
      'regal-blue': '#141313',
      'borderbg': '#141313',

    },
  },
  plugins: [require("daisyui")],
};