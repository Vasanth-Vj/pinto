/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        rockwell: ['Rockwell', 'sans-serif'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
