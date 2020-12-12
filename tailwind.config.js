module.exports = {
  purge: [

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textShadow: {
        'a': '0 2px 0 #000',
      },
      fontFamily: {
        'sans': ['Kolja-Black']
      }
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-textshadow')
  ],
}
