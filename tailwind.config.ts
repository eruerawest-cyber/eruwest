import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal-primary": "#1B4B4A",
        "teal-accent": "#2D6A69",
        "bg-light": "#F4F6F5",
        ink: "#111827",
        muted: "#4B5563",
        "teal-muted": "#CBD5D1",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
