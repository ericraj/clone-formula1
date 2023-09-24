import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "f1-text": "#15151e",
        "f1-red": "#e10600",
        "f1-black": "#1f1f27",
        "f1-gray": "#949498",
        "f1-gray-light": "#d0d0d2"
      },
      fontFamily: {
        titilliumweb: "var(--titilliumweb)",
        f1: "var(--f1)"
      },
      maxWidth: {
        page: "82.5rem"
      },
      minHeight: {
        50: "3.125rem",
        70: "4.375rem"
      },
      spacing: {
        1.1: "0.3125rem"
      },
      borderRadius: {
        5: "0.3125rem"
      }
    }
  },
  plugins: []
};
export default config;
