const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "xlight-purple": "#E0AAFF", // "light-bg": "#EDDAF8",
        "light-purple": "#9D4EDD", // "secondary-bg": "#80ABF4",
        "regular-purple": "#5A189A", // "primary-bg": "#401986",
        "dark-purple": "#3C096C", // "dark-bg": "#28184d",
        "xdark-purple": "#240046",
        "black-purple": "#10002B",
        accent: "#79E2F0",
        accent2: "#FF5DA9",
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        main: ["NeueBit-Bold", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: "320px",
      },
    },
  },
};
