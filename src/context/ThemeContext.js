import React from 'react'
import {ThemeContext} from 'styled-components'
import {useTheme as hook} from '../hooks/theme'

function ThemeProvider({ children }) {

  const state = hook() 

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  )
}

// Consume the context and create a context hook.
const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {ThemeProvider, useTheme}

