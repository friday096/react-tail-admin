/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to Tailwind config
      },
      colors: {
        primary: '#E6F4FF', // Add your primary color here
        activeColor:'rgb(22, 119, 255)'
      },
      text:{
        
      }
    },
  },
  plugins: [],
}

