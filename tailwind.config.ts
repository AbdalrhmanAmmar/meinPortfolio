import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Playwrite: ["Playwrite NG Modern"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "#E5E7EB",
        baseColor: "#10B981",
        CustomeGreen: "#34D399",
        CustomeBlue: "#60A5FA",
        defaultbackground: "#00f260",
      },
    },
  },
  plugins: [],
};

export default config;
