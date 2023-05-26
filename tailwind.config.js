/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./index.html"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Hinglish: ["Hinglish", "cursive"],
      },
    },
  },
  plugins: [],
};
