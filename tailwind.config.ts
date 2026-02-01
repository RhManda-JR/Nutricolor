/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
      '2xl': '1536px',
    },
    extend: {   
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        playwrite: ['var(--font-playwrite)'],
      },
  },
  },
  plugins: [],
}

