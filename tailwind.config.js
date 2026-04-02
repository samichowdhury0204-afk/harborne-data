/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./Pages/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
