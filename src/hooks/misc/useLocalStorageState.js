import React from 'react'
import {getLocalState} from './getLocalState'

export const useLocalStorageState = (key, initialState) => {

    if (!key) throw new Error('LocalStorage key must be provided.')

    // Load local state, otherwise use initial state.
    const [state, setState] = React.useState(getLocalState({key, fallback: initialState}))

    // Save state when it's changed.
    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

