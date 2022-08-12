const colors = require('tailwindcss/colors');

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
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
        Playfair: ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        sky: colors.sky,
        slate: colors.slate,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
