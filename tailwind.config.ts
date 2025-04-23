import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs: ["16px", { lineHeight: "24px" }],
        sm: ["20px", { lineHeight: "32px" }],
        base: ["20px", { lineHeight: "24px" }],
        lg: ["24px", { lineHeight: "32px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["20px", { lineHeight: "28px" }],
        "3xl": ["60px", { lineHeight: "68px" }],
        "4xl": ["48px", { lineHeight: "56px" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          "40": "rgba(0, 0, 0, 0.4)",
        },
        white: {
          DEFAULT: "#ffffff",
          "60": "rgba(255, 255, 255, 0.6)",
        },
        neutral: {
          900: "#1f2428",
          800: "#363d45",
          700: "#40586d",
          500: "#7b8a98",
          400: "#839db4",
          300: "#b4bdc5",
        },
        primary: {
          50: "#c2d4ff",
          100: "#e1e9ff",
          200: "#b3c8fe",
          500: "#1c59fc",
          600: "#0340e3",
          800: "#01237e",
          900: "#01154c",
          10: "#f5f8ff",
        },
        background: {
          1: "#1C59FC",
          2: "#C2D4FF",
          3: "#FFFFFF",
          4: "#E1E9FF",
        },
      },
      spacing: {
        0: "0",
        1: "0.25rem" /* 4px */,
        2: "0.5rem" /* 8px */,
        3: "0.75rem" /* 12px */,
        4: "1rem" /* 16px */,
        5: "1.25rem" /* 20px */,
        6: "1.5rem" /* 24px */,
        8: "2rem" /* 32px */,
        10: "2.5rem" /* 40px */,
        12: "3rem" /* 48px */,
        16: "4rem" /* 64px */,
        20: "5rem" /* 80px */,
        24: "6rem" /* 96px */,
        32: "8rem" /* 128px */,
      },
    },
  },
  plugins: [],
};

export default config;
