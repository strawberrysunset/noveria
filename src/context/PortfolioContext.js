import React from 'react'
import {usePortfolio as hook} from '../hooks/portfolio'

const Context = React.createContext()

function PortfolioProvider({ children }) {

  const state = hook() // Initialize the hook in the provider.

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

// Consume the context and create a context hook.
const usePortfolio = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`hook must be used within provider`)
  }
  return context
}

export {PortfolioProvider, usePortfolio}
