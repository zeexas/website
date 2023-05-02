/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        hoverItem: 'hover_item 0.35s ease-in-out forwards',
        freeItem: 'free_item 0.35s ease-out forwards',
      },
      keyframes: {
        hover_item: {
          '0%': { transform: 'translateX(-1.5rem)' },
          '50%': { transform: 'translateX(0.25rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        free_item: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-1.75rem)' },
          '100%': { transform: 'translateX(-1.5rem)' },
        },
      },
    },
  },
  plugins: [],
};
