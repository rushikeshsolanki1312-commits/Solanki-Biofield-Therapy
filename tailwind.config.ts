import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f5132",
          light: "#157347",
          dark: "#0a3d26",
          gold: "#d4a017",
          goldLight: "#f0c94a",
          cream: "#f7f4ea",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
