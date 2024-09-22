/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        systemBlue: '#345ff6',
        gunmetal: '#253347',
        darkElectricBlue: '#5e6e85',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
