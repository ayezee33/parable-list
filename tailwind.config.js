/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' for system preferences
  theme: {
    extend: {
      colors: {
        // Rich, traditional colors
        parchment: {
          50: '#FFFDF5',
          100: '#FDF6E3',
          200: '#F9E8C0',
          300: '#F5D89D',
          400: '#EEC87A',
          500: '#E6B757',
        },
        scroll: {
          50: '#F9F5F1',
          100: '#F9F6E8',
          200: '#F0EAD6',
          300: '#DBC3AB',
          400: '#CFAF8F',
          500: '#C39B73',
        },
        temple: {
          50: '#F6F4F1',
          100: '#F5F5DC',
          200: '#E6E6CA',
          300: '#C9BDAB',
          400: '#B7A78F',
          500: '#A59173',
          700: '#4A4A40',
        },
        wine: {
          100: '#F5E6E8',
          200: '#E6CED1',
          300: '#D4A8AD',
          400: '#B77E85',
          500: '#722F37',
          600: '#5C262C',
          700: '#722F37',
          800: '#5D2530',
          900: '#4A1E26',
        },
        gold: {
          400: '#FFD700',
          500: '#FFD700',
          600: '#A68A2B',
        }
      },
    },
  },
  plugins: [],
} 