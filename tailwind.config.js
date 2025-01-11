/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"2rem",
        md:'1.5rem',
        lg:'2rem'
      }
    },
    extend: {},
  },
  plugins: [],
}