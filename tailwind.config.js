/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: {
          DEFAULT: "#00FFFF", // Replace with your preferred hex code
        },
        gold: {
          DEFAULT: "#ffd900d7", // Replace with your preferred hex code
        },
        blackk: {
          DEFAULT: "#00000093", // Replace with your preferred hex code
        },
        myblue: {
          DEFAULT: "#0000ff2b", // Replace with your preferred hex code
        },
        mywhite: {
          DEFAULT: "#ffffff3d", // Replace with your preferred hex code
        },
      },
    },
  },
  plugins: [],
};
