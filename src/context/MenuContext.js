import React from 'react'
import {useMenu as hook} from '../hooks/menu'

const Context = React.createContext()

function MenuProvider({ children }) {

  const state = hook() // Initialize the hook in the provider.

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

// Consume the context and create a context hook.
const useMenu = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {MenuProvider, useMenu}
