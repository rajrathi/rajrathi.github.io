const { slate } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        sky: colors.sky,
        slate: colors.slate
      },
    },
  },
  variants: {},
  plugins: [],
};
