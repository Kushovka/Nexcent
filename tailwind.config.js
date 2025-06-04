/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-silver": "#F5F7FA",
        "neutral-d-gray": "#4D4D4D",
        "neutral-black": "#263238",
        "brand-primary": "#4CAF4F",
        "neutral-gray": "#717171",
        "Gray-900": "#18191F",
        "grey-blue": "#ABBED1",
        "l-grey": "#89939E",
      },
    },
  },
  plugins: [],
};
