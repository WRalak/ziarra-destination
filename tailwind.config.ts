import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141009",
        surface: "#1c1710",
        surface2: "#241d13",
        line: "rgba(244,238,225,0.10)",
        lineStrong: "rgba(244,238,225,0.18)",
        cream: "#F5EFE2",
        sand: "#B7A98E",
        sandDim: "#8C8168",
        gold: "#E3A530",
        goldDeep: "#B87F1E",
        clay: "#C1653B",
        acacia: "#7C8C57",
        acaciaDeep: "#2C3420"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "dotted-line":
          "linear-gradient(90deg, rgba(244,238,225,0.18) 0 8px, transparent 8px 16px)"
      }
    }
  },
  plugins: []
};

export default config;
