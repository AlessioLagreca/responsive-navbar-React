import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        Violet: "hsl(257, 27%, 26%)",
        DarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
export default config;
