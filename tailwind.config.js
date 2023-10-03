/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

