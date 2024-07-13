import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya Sans SC", "sans-serif"],
        alumni: ["Alumni Sans", "sans-serif"],
        langar: ["Langar", "system-ui"],
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.jpg')",
      },
      colors: {
        overlay: '#0000008C'
      },
    },
  },
  plugins: [],
};
export default config;