import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MonaSans: ["MonaSans"],
      },
      colors: {
        primary: "#22c55e",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      aspectRatio: {
        "3/1": "3/1",
        "2/3": "2/3",
      },
    },
  },
  plugins: [],
};
export default config;
