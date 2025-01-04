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
        'neon': '#00FFD1',
        'dark': '#121212',
        'darker': '#0A0A0A',
      },
      fontFamily: {
        'space': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

