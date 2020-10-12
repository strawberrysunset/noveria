import React from 'react'
import {useLocalStorageReducer} from '../../hooks/misc'

export const reducer  = (settings, action) => {
  switch (action.type) {
    case 'set_currency': {
      return { ...settings, currency: action.currency}
    }
    case 'set_theme' : {
      return {...settings, theme: action.theme}
    }
    case 'set_settings' : {
      return action.settings
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
  
export const middleware = (updateSettings, settings, action) => {
  switch (action.type) {
    case 'toggle_theme': {
      const theme = (settings.theme === 'light') ? 'dark' : 'light'
      return updateSettings({type: 'set_theme', theme})
    }
    case 'set_theme': {
      return updateSettings({type: 'set_theme', theme: action.theme})
    }
    default: {
      updateSettings(action)
    }
  }
}

export const useSettings = () => {

  const [settings, dispatch] = useLocalStorageReducer('noveria-settings', reducer, {
    theme: 'dark',
    currency: 'usd',
  })

  const updateSettings = (action) => middleware(dispatch, settings, action)

  // useLocalStorageSync(settings, 'noveria-settings', (localState) => {
  //   updateSettings({type: 'set_settings', settings: localState})
  // }, [settings])

  return {...settings, updateSettings}
}