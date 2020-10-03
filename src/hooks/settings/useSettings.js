import React from 'react'

export const reducer  = (settings, action) => {
  switch (action.type) {
    case 'set_currency': {
      return { ...settings, currency: action.currency}
    }
    case 'set_theme' : {
      return {...settings, theme: action.theme}
    }
    case 'set_save' : {
      return {...settings, save: action.status}
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

  const [settings, dispatch] = React.useReducer(reducer, {
    theme: 'dark',
    currency: 'usd',
    save: true
  })

  const updateSettings = (action) => middleware(dispatch, settings, action)

  // useLocalStorageSync('noveria-settings', (localState) => {
  //   updateSettings({type: 'set_settings', settings: localState})
  // })

  return {...settings, updateSettings}
}