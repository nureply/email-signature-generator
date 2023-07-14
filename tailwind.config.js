/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nureply-blue-full": "rgb(59,130,246)",
        "nureply-blue": "rgba(59,130,246,.5)",
        "nureply-blue-tint": "rgba(59,130,246,.25)",

        background: "rgb(243, 244, 246)",
        window: "rgb(255, 255, 255)",

        default: "rgb(75, 85, 99)",
        input: "rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
