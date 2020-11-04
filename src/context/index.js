import React from 'react'
import {IconContext} from 'react-icons'
import {QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider} from 'react-query'
import {useMenu, useNotification, usePortfolio, useSettings, useTheme} from '../hooks'
import {createContext} from './createContext'
import {ThemeContext} from 'styled-components'

// We create a context consumer and provider for each hook.
const [useMenuContext, MenuProvider] = createContext({hook: useMenu, name: 'Menu'})
const [useNotificationContext, NotificationProvider] = createContext({hook: useNotification, name: 'Notification'})
const [useSettingsContext, SettingsProvider] = createContext({hook: useSettings, name: 'Settings'})

// Since some context values depend on parent provider state, we link up the hook dependencies before creating the child contexts.
const usePortfolioWithDependency = () => {
  const {currency} = useSettingsContext()
  return usePortfolio({currency})
}

const useThemeWithDependency = () => {
  const {theme, darkMode} = useSettingsContext()
  return useTheme({theme, darkMode})
}

// Context dependencies have been declared, now we create the remaining context.
const [usePortfolioContext, PortfolioProvider] = createContext({hook: usePortfolioWithDependency, name: 'Portfolio'})
const [useThemeContext, ThemeProvider] = createContext({context: ThemeContext, hook: useThemeWithDependency, name: 'Theme'})

// The benefit of this method is that context relations are clear.

export {
  useThemeContext as useTheme,
  usePortfolioContext as usePortfolio,
  useSettingsContext as useSettings,
  useNotificationContext as useNotification,
  useMenuContext as useMenu,
}

const queryCache = new QueryCache()

const reactQueryConfig = {
  queries: {
    keepPreviousData: true,
    initialStale: true
  }
}

export const ContextProvider = ({children}) => (
  <SettingsProvider>
    <ReactQueryCacheProvider cache={queryCache}>
      <ReactQueryConfigProvider config={reactQueryConfig}>
        <PortfolioProvider>
          <ThemeProvider>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <MenuProvider>
                <NotificationProvider>
                  {children}
                </NotificationProvider>
              </MenuProvider>
            </IconContext.Provider>
          </ThemeProvider>
        </PortfolioProvider>
      </ReactQueryConfigProvider>
    </ReactQueryCacheProvider>
  </SettingsProvider>
)

