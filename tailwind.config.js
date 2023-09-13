/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#73ddb8',

          secondary: '#7c5df7',

          accent: '#ea6bea',

          neutral: '#252a3c',

          'base-100': '#34303b',

          info: '#40a8f2',

          success: '#5ddaa4',

          warning: '#f4ce10',

          error: '#df5134',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
