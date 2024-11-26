/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5be05", 
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
