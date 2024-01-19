/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'monospace'],
      },
      colors:{
        'myGreen': '#619d9a',
      }

     
    },
  },
  plugins: []
  
}

