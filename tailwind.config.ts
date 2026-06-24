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
        navy: "#0B1F3A",
        blue: {
          electric: "#1E6FD9",
        },
        brown: {
          earth: "#6B3F1F",
          sand: "#C8A97E",
        },
        offwhite: "#F5F2EE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["96px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["72px", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "heading-xl": ["56px", { lineHeight: "1.1" }],
        "heading-lg": ["40px", { lineHeight: "1.15" }],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "scroll-bounce": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
