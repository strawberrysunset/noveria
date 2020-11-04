import React from 'react'
import {IconContext} from 'react-icons'
import {QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider} from 'react-query'
import {useMenu as useMenuRaw} from '../hooks/menu'
import {useNotification as useNotificationRaw} from '../hooks/notification'
import {usePortfolio as usePortfolioRaw} from '../hooks/portfolio'
import {useSettings as useSettingsRaw} from '../hooks/settings'
import {useTheme as useThemeRaw} from '../hooks/theme'
import {createContext} from './createContext'
import {ThemeContext} from 'styled-components'

// We create a context consumer and provider for each hook.
const [useMenu, MenuProvider] = createContext({hook: useMenuRaw, name: 'Menu'})
const [useNotification, NotificationProvider] = createContext({hook: useNotificationRaw, name: 'Notification'})
const [useSettings, SettingsProvider] = createContext({hook: useSettingsRaw, name: 'Settings'})

// Since some context values depend on parent provider state, we declare the hook inter dependencies before creating the child contexts.
const usePortfolioModified = () => {
  const {currency} = useSettings()
  return usePortfolioRaw({currency})
}

const useThemeModified = () => {
  const {theme, darkMode} = useSettings()
  return useThemeRaw({theme, darkMode})
}

// Context interdependencies have been declared, now we create the remaining context.
const [usePortfolio, PortfolioProvider] = createContext({hook: usePortfolioModified, name: 'Portfolio'})
const [useTheme, ThemeProvider] = createContext({context: ThemeContext, hook: useThemeModified, name: 'Theme'})

// The benefit of this method is that context relations are clear.

export {
  useTheme,
  usePortfolio,
  useNotification,
  useMenu,
  useSettings
}

const queryCache = new QueryCache()

const reactQueryConfig = {
  queries: {
    keepPreviousData: true,
    initialStale: true
  }
}

export const ContextProvider = ({children}) => (
  <MenuProvider>
    <NotificationProvider>
      <SettingsProvider>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <ReactQueryCacheProvider cache={queryCache}>
            <ReactQueryConfigProvider config={reactQueryConfig}>
              <PortfolioProvider>
                <ThemeProvider>
                  {children}
                </ThemeProvider>
              </PortfolioProvider>
            </ReactQueryConfigProvider>
          </ReactQueryCacheProvider>
        </IconContext.Provider>
      </SettingsProvider>
    </NotificationProvider>
  </MenuProvider>
)

