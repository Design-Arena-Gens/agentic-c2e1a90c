import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#1D4ED8",
        "brand-secondary": "#0EA5E9",
        "brand-dark": "#0B1120",
        "brand-accent": "#FACC15"
      }
    }
  },
  plugins: []
};

export default config;
