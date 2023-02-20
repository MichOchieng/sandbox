/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 20s linear infinite'
      },
      keyframes: {
        rotate: {
          from: {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '50%': {
            transform: 'scale(1.3)'
          },
          to: {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
