const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1f389b', // Tu primary-500
          600: '#1e3a8a',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1c2f89',
          950: '#13193a',
        },
        secondary: {
          50: '#f5f8e2',
          100: '#ebf0c6',
          200: '#d8e199',
          300: '#c4d16d',
          400: '#b0c140',
          500: '#b8be36', // Tu secondary-500
          600: '#9aa02c',
          700: '#7c8223',
          800: '#5f641a',
          900: '#414511',
          950: '#30330d',
        },
      },
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = config

