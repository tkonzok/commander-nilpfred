/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#64a19d',
        'primary-dark': '#50817e',
        secondary: '#7464a1',
        accent: '#1cabc4',
      },
      fontFamily: {
        display: ['adumu', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
