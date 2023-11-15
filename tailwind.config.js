/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" ,"./src/**/*.{vue,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        "weather-primary": "#000036",
        "weather-secondary": "#003153",
      }
    },
    fontFamily:{
      Roboto:["Roboto", "sans-serif"],
    },
    container:{
      padding: "2rem",
      center:true,
    },
    screens:{
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

