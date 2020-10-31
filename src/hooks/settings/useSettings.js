import {useReducerCustom} from '../common/'
import React from 'react'

export const reducer  = (settings, action) => {
  switch (action.type) {
    case 'set_currency': {
      return { ...settings, currency: action.currency}
    }
    case 'set_theme' : {
      return {...settings, theme: action.theme}
    }
    case 'set_dark_mode' : {
      return {...settings, darkMode: action.darkMode}
    }
    case 'set_firstVisit' : {
      return {...settings, firstVisit: action.firstVisit}
    }
    case 'replace_settings' : {
      return action.settings
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
  
export const asyncMiddleware = async (settings, updateSettings, action) => {
  switch (action.type) {
    case 'set_theme_color': {
      return updateSettings({type: 'set_theme', theme: action.theme})
    }
    case 'toggle_dark_mode': {
      return updateSettings({type: 'set_dark_mode', darkMode: !settings.darkMode})
    }
    default: {
      updateSettings(action)
    }
  }
}

export const useSettings = () => {

  const [settings, updateSettings] = useReducerCustom({
    reducerArgs : [reducer, {
      theme: 'avalanche',
      darkMode: true,
      currency: 'usd',
      firstVisit: true,
    }],
    middleware: [asyncMiddleware],
    saveToLocalStorage: {
      isEnabled: true,
      key: 'noveria--Settings'
    }
  })

  return React.useMemo(() => ({...settings, updateSettings}), [settings, updateSettings])
}