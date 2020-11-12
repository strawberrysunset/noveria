import React from 'react'
import {IconContext} from 'react-icons'
import {QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider} from 'react-query'
import {useMenu, useNotification, usePortfolio, useSettings, useTheme} from '../hooks'
import {createContextAndProvider} from './createContextAndProvider'
import {ThemeContext} from 'styled-components'

// We create a context consumer and provider for each useHook.
const [useMenuContext, MenuProvider] = createContextAndProvider(useMenu)
const [useNotificationContext, NotificationProvider] = createContextAndProvider(useNotification)
const [useSettingsContext, SettingsProvider] = createContextAndProvider(useSettings)
const [usePortfolioContext, PortfolioProvider] = createContextAndProvider(() => {
  const {currency} = useSettingsContext()
  return usePortfolio({currency})
})
const [useThemeContext, ThemeProvider] = createContextAndProvider(() => {
  const {theme, darkMode} = useSettingsContext()
  return useTheme({theme, darkMode})
}, ThemeContext)

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

