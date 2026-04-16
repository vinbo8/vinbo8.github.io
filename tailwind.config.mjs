import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // "highlight": "#ea5440",
        "highlight": "#db5461",
        "accent": "#024034",
        "bg": "#ffffff",
        "fg": "#000000",
      },
      fontFamily: {
        title: ["Jost", ...defaultTheme.fontFamily.serif],
        body: ["Bricolage Grotesque", ...defaultTheme.fontFamily.serif],
        // deco: ["Jost"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
