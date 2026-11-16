import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#351808", paper: "#FFFAF3", off: "#FFF1E1", line: "#E8CFB3", mute: "#765943", accent: "#F58220", "accent-dark": "#A94708" },
    fontFamily: { serif: ["var(--serif)"], sans: ["var(--sans)"] },
  } },
  plugins: [],
};
export default config;
