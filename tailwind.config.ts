import type { Config } from "tailwindcss";
// const textShadowPlugin = require('tailwindcss-textshadow');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      boxShadow: {
        'text-shadow-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-shadow-md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'text-shadow-lg': '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
