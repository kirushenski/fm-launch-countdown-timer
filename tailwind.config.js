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
        black: '#000',
        blue: '#343650',
        'blue-dark': '#1D1E28',
        'blue-darkest': '#191A23',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heading: ['1.375rem', 1.32],
        countdown: ['5rem', 1],
        'countdown-text-mobile': ['.4375rem', 1.71],
      },
      letterSpacing: {
        heading: '.35em',
        'countdown-text': '.42em',
      },
      padding: {
        19: '4.75rem',
        25: '6.25rem',
        33: '8.25rem',
      },
      margin: {
        13: '3.25rem',
        26: '6.5rem',
      },
      maxWidth: {
        container: '43rem',
      },
      height: {
        card: '8.75rem',
        'card-wrapper': '9.375rem',
        line: '.0625rem',
      },
      width: {
        digit: '3.25rem',
      },
      backgroundImage: {
        stars: 'url(../images/bg-stars.svg)',
        hills: 'url(../images/pattern-hills.svg)',
      },
      backgroundOpacity: {
        15: '15%',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['focus-visible'],
    },
  },
}
