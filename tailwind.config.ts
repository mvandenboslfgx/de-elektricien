import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#06B6D4",
        background: "#F7F8FA",
        success: "#22C55E"
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        body: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "lightbox-zoom": "lightboxZoom 0.25s ease-out forwards"
      },
      transitionDuration: {
        300: "300ms"
      }
    }
  },
  plugins: []
};

export default config;

