/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        1000: '1000px'
      },
      height: {
        600: '600px'
      },
      margin: {
        100: '100px'
      }
    }
  },
  plugins: []
};

export default config;
