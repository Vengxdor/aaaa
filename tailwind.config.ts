/* eslint-disable import/no-named-default */
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: '#fdeee3',
        background: '#030818',
        secundary: '#f3ab74',
        primary: '#0e8aa2',
        accent: '#3f25ed'
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        onload: {
          '0%': {
            opacity: '0',
            translate: '0px 10%'
          },
          '50%': {
            opacity: '.3',
            translate: '0px 5%'
          },
          '100%': {
            translate: '0px ',
            opacity: '1'
          }
        },
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        }
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'onload-slow': 'onload .4s linear',
        'onload-mid': 'onload .3s linear',
        'onload-fast': 'onload .3s linear',
        'logo-cloud': 'logo-cloud 30s linear infinite',
        'meteor-effect': 'meteor 5s linear infinite'
      },
      boxShadow: {
        x: 'inset -10px 0px 40px 0px rgba(0, 0, 0), inset 10px 0px 40px 0px rgba(0, 0, 0)'
      }
    }
  },
  plugins: [addVariablesForColors]
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors ({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}
