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
        rotate: 'rotate 20s linear infinite',
        hover: 'hover 2s ease-in-out infinite'
      },
      keyframes: {
        rotate: {
          from: {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          to: {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
        hover: {
          '0%, 100%': {
            transform: 'translate(0,0)',
          },
          '50%': {
            transform: 'translateY(4px)',
          },
        }
      }
    },
  },
  plugins: [],
}
