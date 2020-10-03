import React from 'react'

export const useLocalStorageSync = (state, key, handleFetchState) => {

  // Load state from local storage.
  React.useEffect(() => {
    const state = localStorage.getItem(key)
    if (state) handleFetchState(JSON.parse(state))
  }, [])

  // Save state when it's changed.
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [handleFetchState, key, state])
}

