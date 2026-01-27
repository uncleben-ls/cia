/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is critical!
  ],
  theme: {
    extend: {
      colors: {
        'cia-maroon': '#800000',
        'cia-yellow': '#FFD700',
        'cia-black': '#1a1a1a',
      },
    },
  },
  plugins: [],
}