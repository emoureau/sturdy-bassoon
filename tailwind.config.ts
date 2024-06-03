import { join } from 'node:path'
import type { ModuleOptions } from '@nuxtjs/tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config: ModuleOptions['config'] = {
  content(contentDefaults) {
    return [
      // add the defaults
      ...contentDefaults,

      // Add ui layer presets
      join(__dirname, 'presets/**/*.{js,vue,ts}'),
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#08335E',
          50: '#E8F2FD',
          100: '#D0E6FB',
          200: '#A1CCF7',
          300: '#73B3F2',
          400: '#4499EE',
          500: '#157EE8',
          600: '#1166BB',
          700: '#0D4D8C',
          800: '#08335E',
          900: '#041A2F',
          950: '#020D17',
        },
        secondary: {
          DEFAULT: '#bf4343',
          50: '#fcf4f4',
          100: '#fae6e6',
          200: '#f6d2d2',
          300: '#eeb3b3',
          400: '#e28787',
          500: '#d45f5f',
          600: '#bf4343',
          700: '#a03535',
          800: '#852f2f',
          900: '#612727',
          950: '#3c1313',
        },
        surface: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        success: colors.green,
        info: colors.sky,
        help: colors.purple,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.2xl') },
        h4: { fontSize: theme('fontSize.xl') },
        h5: { fontSize: theme('fontSize.lg') },
      })
    }),
  ],
}

export default config
