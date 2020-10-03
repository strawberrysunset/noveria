import React from 'react'
import {useSettings as hook} from '../hooks/settings'

const Context = React.createContext()

function SettingsProvider({ children }) {

  const state = hook() // Initialize the hook in the provider.

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

// Consume the context and create a context hook.
const useSettings = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {SettingsProvider, useSettings}
