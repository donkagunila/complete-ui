/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "100" },
        },
        "accordion-up": {
          from: { height: "100" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#22c55e",
        accent: "#f59e0b",
        "primary-foreground": "#ffffff",
        "accent-foreground": "#ffffff",
        "muted-foreground": "#64748b",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

