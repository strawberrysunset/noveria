import React from 'react'

export const useCustomReducer = ({initialState, init, reducer, middleware, saveToLocalStorage}) => {

  const [state, dispatch] = React.useReducer(reducer, initialState, init)

  const modifiedDispatch = (action) => middleware(state, dispatch, action)

  // If saveToLocalStorage is enabled, save the state.
  React.useEffect(() => {
    if (saveToLocalStorage) {
      localStorage.setItem(saveToLocalStorage.key, JSON.stringify(state))
    }
  }, [saveToLocalStorage, state])

  return [state, modifiedDispatch]
}
