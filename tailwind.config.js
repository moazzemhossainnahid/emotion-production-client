/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
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
=======
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  daisyui: {
    themes: [
      {
        mytheme: {     
        "primary": "#FF574B",
        "secondary": "#FF556B",
        "accent": "#1FB2A6", 
        "neutral": "#191D24",   
        "base-100": "#ffff",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
>>>>>>> 811c9a758fad4961f73f122c41aba268e836b3bd
