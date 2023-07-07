/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nureply-blue-tint': 'rgba(59,130,246,.25)',
        'nureply-blue': 'rgba(59,130,246,.5)',
        'nureply-blue-full': 'rgb(59,130,246)',
      },
    },
  },
  plugins: [],
}
