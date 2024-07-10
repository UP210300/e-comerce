const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = config

