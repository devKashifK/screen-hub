import type { Config } from "tailwindcss";
const { addDynamicIconSelectors } = require("@iconify/tailwind");

const config: Config = {
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
