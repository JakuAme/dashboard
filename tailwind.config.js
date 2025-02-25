/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#1a1a1a', // Definizione personalizzata per gray-950
        },
      },
    },
  },
  plugins: [],
};
