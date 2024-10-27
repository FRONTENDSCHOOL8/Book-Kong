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
        'nav-list': '0.625rem', // 10px
        'tab-menu': '0.875rem', // 14px
        'character-list': '0.8125rem', // 13px
        'heading-2xs': '0.875rem', // 14px
        'heading-xs': '1.125rem', // 18px
        'heading-small': '1.5rem', // 24px
        'heading-medium': '1.75rem', //28px
        'heading-large': '2rem', // 32px
        'content-2xs': '0.625rem', // 10px
        'content-xs': '0.75rem', // 12px
        'content-small': '0.875rem', // 14px
        'content-medium': '1rem', // 16px
        'content-large': '1.125rem', // 18px
        'content-xl': '1.25rem', // 20px
        'content-2xl': '1.5rem', // 24px
        'content-3xl': '2rem', // 32px
        'content-small--medium': '0.875rem', // 14px
        'content-medium--medium': '1rem', // 16px
        'content-xs--medium': '0.75rem', // 12px
        'booktree-list': '1rem', //  16px
      },
      colors: {
        primary: {
          50: 'rgba(255, 246, 245, 1)',
          100: 'rgba(255, 224, 218, 1)',
          200: 'rgba(249, 186, 175, 1)',
          300: 'rgba(250, 154, 133, 1)',
          400: 'rgba(248, 114, 84, 1)',
          500: 'rgba(242, 72, 34, 1)',
          600: 'rgba(211, 50, 14, 1)',
          700: 'rgba(178, 43, 12, 1)',
          800: 'rgba(158, 39, 13, 1)',
          900: 'rgba(115, 27, 8, 1)',
        },
        grayscale: {
          50: 'rgba(243, 243, 243, 1)',
          100: 'rgba(235, 235, 235, 1)',
          200: 'rgba(221, 221, 221, 1)',
          300: 'rgba(204, 204, 204, 1)',
          400: 'rgba(170, 170, 170, 1)',
          500: 'rgba(132, 132, 132, 1)',
          600: 'rgba(114, 114, 114, 1)',
          700: 'rgba(94, 94, 94, 1)',
          800: 'rgba(51, 51, 51, 1)',
          900: 'rgba(30, 30, 30, 1)',
          white: 'rgba(255, 255, 255, 1)',
          black: 'rgba(0, 0, 0, 1)',
        },
        badge: {
          gree: 'rgba(0, 218, 87, 1)',
          yellow: 'rgba(229, 160, 56, 1)',
          'yellow-02': 'rgba(255, 222, 48, 1)',
          purple: 'rgba(206, 108, 239, 1)',
          skyblue: 'rgba(78, 138, 255, 1)',
          'background-gray': 'rgba(246, 246, 246, 1)',
        },
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
