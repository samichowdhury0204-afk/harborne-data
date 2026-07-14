import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F5F2',
        deep: '#0E1620',
        ink: '#0E1620',
        'ink-muted': '#5A6470',
        gold: '#C9A57A',
        'gold-hi': '#E5C9A3',
        line: '#E4DFD7',
        'line-dark': '#1E2A38',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
export default config
