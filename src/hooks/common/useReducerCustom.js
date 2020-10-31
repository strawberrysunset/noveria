import React from 'react'
import {getLocalStorageState} from './getLocalStorageState'

export const useReducerCustom = ({reducerArgs = [], middleware = [], saveToLocalStorage = {}}) => {

  const [state, dispatch] = React.useReducer(
    reducerArgs[0],
    saveToLocalStorage.isEnabled ? getLocalStorageState({key: saveToLocalStorage.key, fallback: reducerArgs[1]}) : reducerArgs[1],
    reducerArgs[2]
  )

  // If saveToLocalStorage is enabled, save the state.
  React.useEffect(() => {
    localStorage.setItem(saveToLocalStorage.key, JSON.stringify(state))
  }, [state])

  // Call each middleware function.
  const interceptedDispatch = React.useCallback(async action => {
    if (!middleware) return dispatch(action)
    // Middleware could be async so assume all are and await each.
    await Promise.all(middleware.map(async fn => {
      await fn(state, dispatch, action)
    }))
  }, [middleware, state, dispatch])

  return [state, interceptedDispatch]
}