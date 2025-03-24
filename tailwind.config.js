/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#E5E7EB',
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#93C5FD',
              },
            },
            h1: {
              color: '#F3F4F6',
            },
            h2: {
              color: '#F3F4F6',
            },
            h3: {
              color: '#F3F4F6',
            },
            strong: {
              color: '#F3F4F6',
            },
            code: {
              color: '#F3F4F6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};