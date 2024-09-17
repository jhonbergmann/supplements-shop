import {createStitches} from '@stitches/react'

export const {config, styled, css, globalCss, keyframes, getCssText, theme, createTheme} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      green500: '#1292b2',
      green300: '#11b1d9',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
