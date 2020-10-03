import React from 'react'
import {useNotification as hook} from '../hooks/notification'

const Context = React.createContext()

function NotificationProvider({ children }) {

  const state = hook() // Initialize the hook in the provider.

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

// Consume the context and create a context hook.
const useNotification = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {NotificationProvider, useNotification}
