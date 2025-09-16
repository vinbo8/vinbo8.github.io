import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Jost", ...defaultTheme.fontFamily.serif],
        body: ["Bricolage Grotesque", ...defaultTheme.fontFamily.serif],
        deco: ["Pompiere"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
