/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "white":"#FFFFFF",
      "yellow-600": "#ca8a04",
      "yellow-400": "#FFCC00",
      "black": "#000000",
      "gray": "#4F4F4F",
      "red": "#c30010",
     
      "dark1":"#9730F2",
      "dark":"#A555EC",
    "med":"#D09CFA",
    "light1":"#F4E6F8" ,
     "light":"#F3CCFF"
    },
    extend: {},
  },
  plugins: [],
}