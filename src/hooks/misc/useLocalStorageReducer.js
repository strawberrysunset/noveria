import React from 'react'
import {getLocalState} from './getLocalState'

export const useLocalStorageReducer = (key, reducer, initialState, initializer) => {

    if (!key) throw new Error('LocalStorage key must be provided.')

    // Load local state, otherwise use initial state.
    const [state, dispatch] = React.useReducer(reducer, getLocalState({key, fallback: initialState, initializer}))

    // Save state when it's changed.
    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, dispatch]
}
