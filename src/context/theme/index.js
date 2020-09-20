import React from 'react'
import {useUser} from '../../context'
import themes from './themes'
import {ThemeContext, ThemeProvider as ThemeContextProvider} from 'styled-components/macro'

function ThemeProvider ({ children }) {

  const [userState] = useUser()

  const theme = themes[userState.theme]

  return (
    <ThemeContextProvider theme={theme}>
      {children}
    </ThemeContextProvider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
