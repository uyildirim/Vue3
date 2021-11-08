module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "header-red": "#db4c3f",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
