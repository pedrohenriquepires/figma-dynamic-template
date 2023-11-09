import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

const colors =  {
  background: '#333333',
  border: '#5a5a5a',
  white: '#fff',
  gray: '#666',
  lightGray: '#cccccc',
  darkGray: '#2a2a2a',
  accent: '#2a6ccf'
}

export const theme = {
  colors,
  button: {
    primary: {
      background: colors.accent,
      color: colors.white,
      hover: {
        background: `darken(${colors.accent}, 100)`
      }
    },
    secondary: {
      background: 'transparent',
      border: `1px solid ${colors.white}`,
      color: colors.white,
      hover: {
        background: colors.white,
        color: colors.darkGray
      }
    }
  },
  borderRadius: {
    default: '.6rem',
    sm: '.4rem'
  },
  padding: {
    default: '2rem',
  }
}

export const Theme: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}