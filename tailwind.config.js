/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-color": "rgba(0,0,0,0.55)",
      },
      spacing: {
        128: "30rem",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        barlow: ["Barlow", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
        alata: ["Alata", "sans-serif"],
      },
      backgroundColor: {
        "main-background": "#f6f4f1",
      },
      borderColor: {
        "main-border": "#f6f4f1",
        "footer-line": "#0000004D",
      },
      fontWeight: {
        small: 250,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      letterSpacing: {
        widest: "0.205rem",
      },
    },
  },
  plugins: [],
};
