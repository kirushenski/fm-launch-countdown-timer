const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        blue: '#8385A9',
        red: '#FB5E84',
      },
      neutral: {
        white: '#fff',
        blue: '#343650',
        'blue-dark': '#1D1E28',
        'blue-darkest': '#191A23',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
