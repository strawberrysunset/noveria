import React from 'react'
import {getLocalState} from './getLocalState'

export const useCustomReducer = ({reducerArgs, middleware, saveToLocalStorage}) => {

  const initialState = saveToLocalStorage.isEnabled && (getLocalState({key: saveToLocalStorage.key}) || reducerArgs[1])

  const [state, dispatch] = React.useReducer(
    reducerArgs[0],
    initialState || undefined, 
    reducerArgs[2]
  )

  const modifiedDispatch = (action) => middleware(state, dispatch, action)

  // If saveToLocalStorage is enabled, save the state.
  React.useEffect(() => {
    if (saveToLocalStorage.isEnabled) {
      localStorage.setItem(saveToLocalStorage.key, JSON.stringify(state))
    }
  }, [saveToLocalStorage, state])

  return [state, modifiedDispatch]
}