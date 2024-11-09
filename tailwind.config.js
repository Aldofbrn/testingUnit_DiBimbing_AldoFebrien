/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF204E',
        secondary: '#5D0E41',
        tertiary: '#00224D',
        quarter: '#A0153E',
      },
    },
  },
  plugins: [],
};
