import React from 'react'
import {getLocalStorageState} from './getLocalStorageState'

export const useCustomState = ({initialState, saveToLocalStorage}) => {

  const [state, setState] = React.useState(
    saveToLocalStorage.isEnabled ? getLocalStorageState({key: saveToLocalStorage.key}) : initialState
  )

  // If saveToLocalStorage is enabled, save the state.
  React.useEffect(() => {
    if (saveToLocalStorage.isEnabled) {
      localStorage.setItem(saveToLocalStorage.key, JSON.stringify(state))
    }
  }, [saveToLocalStorage, state])

  return [state, setState]
}