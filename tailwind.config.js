/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sunrise: "#FFBC3B", // A warm, bright yellow-orange
        midnight: "#182B45", // A deep, dark blue
        slate: "#5C5C77", // A muted, medium gray-blue
        navy: "#1E1E4B", // A dark navy blue
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "960px": "960px",
        "460px": "460px",
        xs: "427px",
      },
      fontSize: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
