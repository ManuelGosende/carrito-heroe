/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: true,
        'green': '#41b663',
        'purple': '#6f23bc',
      },
    },
  },
  plugins: [],
};
