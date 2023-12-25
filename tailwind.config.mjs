/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf7e9",
          100: "#faedc7",
          200: "#f7d991",
          300: "#f0b33c",
          400: "#eca023",
          500: "#dc8816",
          600: "#be6710",
          700: "#974811",
          800: "#7e3a15",
          900: "#6b3018",
          950: "#3e170a",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-veryslow": "spin 15s linear infinite",
      },
    },
    fontFamily: {
      sans: ['"Noto Sans"', "sans-serif"],
      serif: ['"Noto Serif Display"', "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "90%",
          maxWidth: "80rem",
          margin: "0 auto",
        },
      });
    },
  ],
};
