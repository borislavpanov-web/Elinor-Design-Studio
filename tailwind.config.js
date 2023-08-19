/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      barlow: ['Barlow', 'sans-serif'],
    },
    backgroundColor: {
      "main-background": "#f6f4f1"
    },
    fontWeight: {
      normal: 400,
    },
    letterSpacing: {
      widest: "0.205rem",
    }
  },
  plugins: [],
};