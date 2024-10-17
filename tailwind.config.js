/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        ultrawide: "2560px",
      },
      colors: {
        systemBlue: "#345ff6",
        gunmetal: "#253347",
        darkElectricBlue: "#5e6e85",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      borderRadius: {
        custom: "16px 149px 149px 16px",
      },
      keyframes: {
        slideFadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-fade-in": "slideFadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
