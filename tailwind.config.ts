import type { Config } from "tailwindcss";

// ==============================================
// GANTI DI SINI KALAU MAU UBAH WARNA TEMA UTAMA
// Sekarang temanya: Dark + Neon Purple + Cyberpunk
// ==============================================
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 👇 GANTI WARNA DI SINI kalau mau ganti aksen dari ungu ke warna lain
        background: "#05030A",       // hitam agak keunguan, dominan background
        surface: "#0D0A16",          // panel/card sebelum di-glass
        neon: {
          purple: "#A855F7",
          violet: "#8B5CF6",
          pink: "#D946EF",
          cyan: "#22D3EE",           // aksen kedua buat variasi cyberpunk
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(168, 85, 247, 0.5), 0 0 60px rgba(139, 92, 246, 0.25)",
        "neon-sm": "0 0 10px rgba(168, 85, 247, 0.4)",
      },
      backgroundImage: {
        "grid-cyber":
          "linear-gradient(to right, rgba(168,85,247,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.07) 1px, transparent 1px)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scanLine 6s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
