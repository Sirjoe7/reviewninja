import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#111111", paper: "#FFFFFF", off: "#F7F7F5", line: "#EAEAEA", mute: "#6b6b6b" },
    fontFamily: { serif: ["var(--serif)"], sans: ["var(--sans)"] },
  } },
  plugins: [],
};
export default config;
