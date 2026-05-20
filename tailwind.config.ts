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
      borderRadius: {
        "2xs": "3px",
        xs: "5px",
      },
      boxShadow: {
        "glow-red": "0 30px 80px -30px rgba(199,18,31,0.55), 0 8px 30px -10px rgba(199,18,31,0.25)",
        "glow-royal": "0 30px 80px -30px rgba(29,78,203,0.5), 0 8px 30px -10px rgba(29,78,203,0.22)",
        "card": "0 32px 80px -36px rgba(0,0,0,0.7), 0 4px 16px -6px rgba(0,0,0,0.4)",
        "lift": "0 50px 110px -40px rgba(0,0,0,0.8), 0 10px 28px -8px rgba(199,18,31,0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "draw": "draw 2.2s cubic-bezier(0.65,0,0.35,1) forwards",
        "marquee": "marquee 36s linear infinite",
        "marquee-rev": "marquee 42s linear infinite reverse",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-12px) rotate(0.5deg)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
