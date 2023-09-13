/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0d6fd8',

          secondary: '#f9f084',

          accent: '#c11d43',

          neutral: '#2d2334',

          'base-100': '#f1f4f8',

          info: '#64a5d3',

          success: '#11884d',

          warning: '#f3b13f',

          error: '#f44881',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
