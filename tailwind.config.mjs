import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "t1": "#ea5440",
        "t2": "#f2f2f2",
        "t3": "#1a090d",
        "t4": "#697268",
      },
      fontFamily: {
        title: ["Jost", ...defaultTheme.fontFamily.serif],
        body: ["Bricolage Grotesque", ...defaultTheme.fontFamily.serif],
        deco: ["Jost"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
