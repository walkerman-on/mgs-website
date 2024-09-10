/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   colors: {
      'color-accent': '#5085a5',
      'bg-color': '#f7f9fb',
      'color-gray': '#ddf4ff',
      'color-primary-200': '#313639',
      "color-acc": "#CCFEFF"
      
   },
   screens: {
      'tablet': '970px',
      // => @media (min-width: 970px) { ... }

      'phone': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1130px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1130px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}