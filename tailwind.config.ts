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
        navy: {
          50:  "#eef0fb",
          100: "#d5d9f5",
          200: "#aab2ea",
          300: "#7f8bdf",
          400: "#5464d4",
          500: "#2D3480",
          600: "#232968",
          700: "#1a1f4f",
          800: "#111436",
          900: "#0a0c20",
          950: "#06071a",
        },
        gold: {
          300: "#e8d48a",
          400: "#dcc060",
          500: "#C9A84C",
          600: "#a8893a",
          700: "#876b2b",
        },
        cream: "#FAFAF7",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-assistant)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0a0c20 0%, #1a1f6e 50%, #2D3480 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "slide-right":"slideRight 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
