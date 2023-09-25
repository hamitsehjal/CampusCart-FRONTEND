/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor1: '#8D0801',
        headingColor: '#E6EDEF',
        textColor: '#0B090A',
        backgroundColor: '#E6EDEF'
      },
      fontFamily: {
        'Cinzel': ['Cinzel', ],
        'fauna-regular': ['Fauna One', 'sans'],
      },
    },
  },
  plugins: [],
}
