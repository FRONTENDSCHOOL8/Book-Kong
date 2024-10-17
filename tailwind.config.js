/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    current: 'currentColor',
    fontFamily: {
      display: ['"IBM Plex Sans KR"', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'nav-list': '10px',
        'tab-menu': '14px',
        'character-list': '13px',
        'heading-2xs': '14px',
        'heading-xs': '18px',
        'heading-small': '24px',
        'heading-medium': '28px',
        'heading-large': '32px',
        'content-2xs': '10px',
        'content-xs': '12px',
        'content-small': '14px',
        'content-medium': '16px',
        'content-large': '18px',
        'content-xl': '20px',
        'content-2xl': '24px',
        'content-3xl': '32px',
        'content-small--medium': '14px',
        'content-medium--medium': '16px',
        'content-xs--medium': '12px',
        'booktree-list': '16px',
      },
      colors: {
        'primary-900': 'rgba(115, 27, 8, 1)',
        'primary-800': 'rgba(158, 39, 13, 1)',
        'primary-700': 'rgba(178, 43, 12, 1)',
        'primary-600': 'rgba(211, 50, 14, 1)',
        'primary-500': 'rgba(242, 72, 34, 1)',
        'primary-400': 'rgba(248, 114, 84, 1)',
        'primary-300': 'rgba(250, 154, 133, 1)',
        'primary-200': 'rgba(249, 186, 175, 1)',
        'primary-100': 'rgba(255, 224, 218, 1)',
        'primary-50': 'rgba(255, 246, 245, 1)',
        'grayscale-black': 'rgba(0, 0, 0, 1)',
        'grayscale-900': 'rgba(30, 30, 30, 1)',
        'grayscale-800': 'rgba(51, 51, 51, 1)',
        'grayscale-700': 'rgba(94, 94, 94, 1)',
        'grayscale-600': 'rgba(114, 114, 114, 1)',
        'grayscale-500': 'rgba(132, 132, 132, 1)',
        'grayscale-400': 'rgba(170, 170, 170, 1)',
        'grayscale-300': 'rgba(204, 204, 204, 1)',
        'grayscale-200': 'rgba(221, 221, 221, 1)',
        'grayscale-100': 'rgba(235, 235, 235, 1)',
        'grayscale-50': 'rgba(243, 243, 243, 1)',
        'grayscale-white': 'rgba(255, 255, 255, 1)',
        'badge-green': 'rgba(0, 218, 87, 1)',
        'badge-yellow-02': 'rgba(255, 222, 48, 1)',
        'badge-yellow': 'rgba(229, 160, 56, 1)',
        'badge-purple': 'rgba(206, 108, 239, 1)',
        'badge-skyblue': 'rgba(78, 138, 255, 1)',
        'background-gray': 'rgba(246, 246, 246, 1)',
      },
      keyframes: {
        'splash-1': {
          '0%': { transform: 'translateY(-272px)', opacity: '0' },
          '70%': { transform: 'translateY(-272px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'splash-2': {
          '0%': { transform: 'translateY(-500px)', opacity: '0' },
          '50%': { transform: 'translateY(-500px)', opacity: '0' },
          '100%': { transform: 'translateY(-64px)', opacity: '1' },
        },
        'splash-3': {
          '0%': { transform: 'translateY(-740px)', opacity: '0' },
          '100%': { transform: 'translateY(-96px)', opacity: '1' },
        },
      },
      animation: {
        'splash-1': 'splash-1 .7s cubic-bezier(.04,.7,.57,1.34) 1',
        'splash-2': 'splash-2 .5s cubic-bezier(.04,.7,.57,1.34) 1',
        'splash-3': 'splash-3 .3s cubic-bezier(.04,.7,.57,1.34) 1',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
          '&::-webkit-scrollbar': {
            display: 'none' /* Chrome, Safari and Opera */,
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
