import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F0F10",
          deep: "#08080A",
          panel: "#16161A",
          raise: "#1C1C20",
          border: "#26262B",
        },
        brand: {
          red: "#C7121F",
          "red-bright": "#E63946",
          "red-deep": "#8E0C16",
          royal: "#1D4ECB",
          "royal-bright": "#3B6BE6",
          "royal-deep": "#143596",
        },
        cream: "#F5F7F4",
        mist: {
          DEFAULT: "#A7AAB0",
          dim: "#6B6E74",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw + 1rem, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 5.5rem)", { lineHeight: "0.96", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3vw + 1rem, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 1.5vw + 1rem, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        eyebrow: ["0.7rem", { lineHeight: "1", letterSpacing: "0.36em" }],
      },
      maxWidth: {
        container: "1320px",
        prose: "62ch",
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.22em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "draw": "draw 2.2s cubic-bezier(0.65,0,0.35,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
