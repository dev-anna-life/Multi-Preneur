/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← ADD THIS LINE
  content: [
    "./*.html",
    "./pages/**/*.html", 
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8ac249',
        accent: '#29437f',
        light: {
          bg: '#f8fafc',
          card: '#ffffff'
        },
        dark: {
          bg: '#0f172a', 
          card: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
