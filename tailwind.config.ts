import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: {
          DEFAULT: "#0f0f13",
          elevated: "#18181f",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.03)",
        },
        accent: {
          blue: "#3b82f6",
          indigo: "#6366f1",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight":
          "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12), transparent 70%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.2)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.2)",
        "subtle-card": "0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
