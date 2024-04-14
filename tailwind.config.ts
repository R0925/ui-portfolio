import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ellipse: "url('/images/Ellipse2.svg')",
        pattern: "url('/images/bg.jfif')",
      },
      animation: {
        smallElement: "smallElement 7s ease-in-out infinite ",
        mediumElement: "mediumElement 15s ease-in-out infinite ",
        bigElement: "bigElement 10s ease-in-out infinite ",
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        smallElement: {
          "0%,": { transform: "translateX(0px) rotate(0deg)" },
          "50%": { transform: "translateX(50px) rotate(90deg)" },
          "100%": { transform: "translateX(0px) rotate(0deg)" },
        },
        mediumElement: {
          "0%,": { transform: "translateY(0px) rotate(180deg)" },
          "50%": { transform: "translateY(180px) rotate(90deg)" },
          "100%": { transform: "translateY(0px) rotate(180deg)" },
        },
        bigElement: {
          "0%,": { transform: "translateX(0px) " },
          "50%": { transform: "translateX(-100px)  translateY(100px)" },
          "100%": { transform: "translateX(0px) " },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0) " },
          to: { transform: "translateX(-100%)  " },
        },
      },
      colors: {
        white: "#F9FAFB",
        black: "#171717",
        secondary: "#FD853A",
        primary: "#344054",
      },
    },
  },
  plugins: [],
};
export default config;
