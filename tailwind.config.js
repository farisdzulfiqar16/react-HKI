/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2027",
        secondary: "#11252C",
        dark1: "#13333C",
        dark2: "#0E1B22",
        dark3: "#182530",
        dark4: "#070C13",
        accent: "#00FFC6",
      },
    },
  },
  plugins: [],
}
