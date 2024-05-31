/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      borderRadius: {
        'custom': '50px',
      },
      colors: {
        'surface': '#fdf7ff',
        'surface-container-low': '#f8f2fa',
        'surface-container': '#f2ecf4',
        'surface-container-high': '#ece6ee',
        'surface-container-highest': '#e6e0e9',
        'on-surface': '#1d1b20',
        'on-surface-variant': '#49454e',
        'outline': '#7a757f',
        'selection-text': '#ffffff', //
      },
      backgroundColor: {
        'primary': '#6825c6',
        'primary-dark': '#4c14b7',
        'primary-light': '#9e6fdc',
        'secondary': '#fbb03b',
        'secondary-dark': '#fa9000',
        'secondary-light': '#fedeac',
        'tertiary': '#c71585',
        'tertiary-dark': '#881573',
        'tertiary-light': '#f10f94',

      },
      textColor: {
        'title': '#4b4b4b',
        'body': '#777777',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`;
        });
      });
    },
  ],
}
