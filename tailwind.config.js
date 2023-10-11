import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindPixelPerfectPreset from '@rise8/tailwind-pixel-perfect-preset'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  presets: [tailwindPixelPerfectPreset],

  plugins: [tailwindcss, autoprefixer],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      primary: '#1597e4',
      black: '#212121',
      creamWhite: '#fafafa',
      error: '#d86161',
      gray: '#7a7a7a',
      bgGray: '#d8d8d8',
      lightBlack: '#212427',
      lightGray: '#dadedf'
    }
  }
}
