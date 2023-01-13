/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "rgba(16, 20, 30, 1)",
        navColor: "rgba(22, 29, 47, 1)",
      },
    },
  },
  plugins: [],
};
