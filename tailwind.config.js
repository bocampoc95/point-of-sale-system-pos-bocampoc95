/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Si usas TypeScript, incluye también .ts y .tsx
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',],
  theme: {
    extend: {},
  },
  plugins: [],
}

