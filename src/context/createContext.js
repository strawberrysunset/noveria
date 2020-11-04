import React from 'react'

// Consumes context and checks whether there is an associated provider higher up in the component tree.
export const createUseContext = ({contextObj, name}) => {
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
  const useContext = createUseContext({contextObj: Context, name})
  return [useContext, ContextProvider]
}






