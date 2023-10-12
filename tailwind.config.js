/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      Value: {
        colors: {
          "colour-brand-aqua-violet": "#a0b5e4",
          "colour-brand-cta---teal": "#42e6e9",
          "colour-brand-dark-blue": "#407bff",
          "colour-brand-purple": "#9883bd",
          "colour-brand-sky-blue": "#45d0e7",
          "colour-brand-violet": "#6f7fdf",
          "colour-greys-00": "#dddddd",
          "colour-greys-01": "#cfcfcf",
          "colour-greys-02": "#636363",
          "colour-greys-03": "#404040",
          "colour-greys-04": "#1e252b",
          "colour-greys-05": "#181c22",
          "colour-greys-06": "#16171a",
          "colour-greys-07-opac": "#bfbfbfd9",
          "colour-greys-background": "#02030c",
          "colour-greys-white": "#f1f1f1",
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
