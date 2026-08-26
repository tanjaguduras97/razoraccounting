import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#28387A",
          dark: "#16224A",
          light: "#3E52A0",
        },
        accent: {
          DEFAULT: "#3FC9BE",
          light: "#6EDDD3",
          dark: "#2FA89B",
        },
        surface: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
