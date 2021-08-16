const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      ...colors,
      dark: '#131214',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    ringColor: false,
  },
}
