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
        "highlight": "#E3170A",
        // "accent": "#eaeee7",
        "accent": "#C3D6B8",
        "bg": "#ffffff",
        "fg": "#1A1F16",
      },
      fontFamily: {
        title: ["Redaction", ...defaultTheme.fontFamily.serif],
        body: ["Spline Sans",  ...defaultTheme.fontFamily.mono],
        // deco: ["Jost"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
