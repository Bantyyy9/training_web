/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        inter: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },

      colors: {
        appBlack1: "#050505",
        appBlack2: "#1F1F1F",
        appBlack3: "#2D2D2D",
        appBlack4: "#3A3A3A",
        appGray1: "#757575",
        appGray2: "#E9E9E9",
        appGray3: "#F4F4F4",
        appPurple: "#A445ED",
        appRed: "#FF5252",
      },
      boxShadow: {
        sLight: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
        sDark: "0px 5px 30px 0px #A445ED",
      },
    },
  },
  plugins: [],
};
