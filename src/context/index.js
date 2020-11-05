import React from 'react'
import {IconContext} from 'react-icons'
import {QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider} from 'react-query'
import {useMenu, useNotification, usePortfolio, useSettings, useTheme} from '../hooks'
import {createContextAndProvider} from './createContextAndProvider'
import {ThemeContext} from 'styled-components'

// We create a context consumer and provider for each hook.
const [useMenuContext, MenuProvider] = createContextAndProvider({hook: useMenu, name: 'Menu'})
const [useNotificationContext, NotificationProvider] = createContextAndProvider({hook: useNotification, name: 'Notification'})
const [useSettingsContext, SettingsProvider] = createContextAndProvider({hook: useSettings, name: 'Settings'})

// Since some context values depend on others we link up any those dependencies before creating the relevant contexts.
const usePortfolioWithDependency = () => {
  const {currency} = useSettingsContext()
  return usePortfolio({currency})
}

const useThemeWithDependency = () => {
  const {theme, darkMode} = useSettingsContext()
  return useTheme({theme, darkMode})
}

// Context dependencies have been declared, now we create the remaining context.
const [usePortfolioContext, PortfolioProvider] = createContextAndProvider({hook: usePortfolioWithDependency, name: 'Portfolio'})
const [useThemeContext, ThemeProvider] = createContextAndProvider({context: ThemeContext, hook: useThemeWithDependency, name: 'Theme'})

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

