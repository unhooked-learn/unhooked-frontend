/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')
const aspectRatioPlugin = require('tailwindcss-plugin-aspect-ratio')

module.exports = {
  purge: {
    enabled: false,
    content: ['./**/*.html', './**/*.vue'],
    options: {
      whitelistPatterns: [/svg.*/, /fa.*/]
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
        '-50': '-50'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
    aspectRatioPlugin({ full: true })
  ]
}
