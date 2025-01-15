/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      } ,
      boxShadow: {
        'right': '4px 0 10px rgba(0, 0, 0, 0.2)', // Customize offset, blur, and spread
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },},
  },
  plugins: [],
}

