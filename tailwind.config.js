/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        hoverItem: 'hover_item 0.35s ease-in-out forwards',
        freeItem: 'free_item 0.35s ease-out forwards',
        showWorkImage: 'show_work_img 0.5s linear forwards',
        hideWorkImage: 'hide_work_img 0.5s linear forwards',
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
        show_work_img: {
          '0%': { opacity: 0, visibility: 'hidden' },
          '30%': { opacity: 1, visibility: 'visible' },
          '100%': { opacity: 1, visibility: 'visible' },
        },
        hide_work_img: {
          '0%': { opacity: 1, visibility: 'visible' },
          '30%': { opacity: 0, visibility: 'hidden' },
          '100%': { opacity: 0, visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
};
