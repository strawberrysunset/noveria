import React from 'react'

// Create a context consumer and provider from a hook. Optionally override the default context value with your own. Optionally pass a name for more descriptive error messages.
export const createContextAndProvider = ({context, hook, name}) => {
  
  const Context = context || React.createContext()
  Context.displayName = name
  
  const ContextProvider = ({ children }) => {
    const state = hook() // Initialize the hook in the provider.
    return (
      <Context.Provider value={state}>
        {children}
      </Context.Provider>
    )
  }
  // Create a custom useContext hook.
  const useContext = () => {
    const context = React.useContext(Context)
    if (context === undefined) {
      throw new Error(`use${name} must be used within a ${name}Provider.`)
    }
    return context
  }
  
  return [useContext, ContextProvider]
}






