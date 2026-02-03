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
      colors: {
        'ethereal-ivory': '#E4E4DE',
        'cinnamon-slate': '#4A505E',
        'muted-sage': '#94A378',
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['Geist Mono', 'IBM Plex Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
