const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#401986",
        "secondary-bg": "#80ABF4",
        "dark-bg": "#28184d",
        "light-bg": "#EDDAF8",
        dark: "#A183B2",
        accent: "#79E2F0",
        accent2: "#FF5DA9",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        title: ["VT323", ...defaultTheme.fontFamily.mono],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
