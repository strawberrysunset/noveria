import React from 'react'

// Creates a custom useContext hook. It automatically consumes the associated context value and verifies whether there is a provider.
export const createCustomUseContextHook = ({contextObj, name}) => {
  return () => {
    const context = React.useContext(contextObj)
    if (context === undefined) {
      throw new Error(`${name} hook must be used within a ${name} provider.`)
    }
    return context
  }
}

export const createContext = ({context, hook, name}) => {
  
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
  const useContext = createCustomUseContextHook({contextObj: Context, name})
  return [useContext, ContextProvider]
}






