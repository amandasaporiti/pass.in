/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#F48F56",
        },
        slate: {
          850: "#00292E"
        }
      }
    },
  },
  plugins: [],
}

