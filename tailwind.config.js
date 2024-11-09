// 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#543310', 
        customPink: '#F5F1EC',
      },
      screens: {
        '2xl': '1400px', // instead of 1536px
        'xl': '1200px',  // instead of 1280px
        'lg': '992px',   // instead of 1024px
        'md': '768px',   // unchanged
      },
    },
  },
  plugins: [],
}
