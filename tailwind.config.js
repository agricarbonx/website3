/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1A1F36',
        'dark-deep': '#0a0e1a',
        neon: '#00FFC6',
        light: '#F9FAFB',
        orange: '#FF6D00',
        violet: '#7F5AF0',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
