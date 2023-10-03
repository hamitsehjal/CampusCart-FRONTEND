/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand colors 
        'campus-red': '#8D0801',
        'campus-blue': '#282A3E ',

        // Secondary Brand colors 
        'campus-secondary': '#66748F',

        // Additional colors 
        'campus-background': '#E6EDEF',
        'campus-text': '#0B090A',
        'campus-accent': '#B50603',
      },
      fontFamily: {
        cinzel: ['var(--font-sans)', ...fontFamily.sans],
        noto_serif: ['var(--font-serif)', ...fontFamily.serif],
        space_mono: ['var(--font-mono)', ...fontFamily.mono],
      }
    },
  },
  plugins: [],
}

