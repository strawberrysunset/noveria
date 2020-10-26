import React from 'react'
import {usePortfolioHistory as hook} from '../hooks/portfolio'

const Context = React.createContext()

function PortfolioHistoryProvider({ children }) {

  const state = hook() // Initialize the hook in the provider.

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

// Consume the context and create a context hook.
const usePortfolioHistory = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {PortfolioHistoryProvider, usePortfolioHistory}
