import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ThemeProvider,
  SettingsProvider,
  PortfolioProvider,
  MenuProvider,
  NotificationProvider
} from './context'
import {QueryCache, ReactQueryCacheProvider, ReactQueryConfigProvider} from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import {App} from './components'
import {IconContext} from 'react-icons'

const reactQueryConfig = {
  queries: {
      keepPreviousData: true,
      initialStale: true
  }
}

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <ReactQueryCacheProvider cache={queryCache}>
          <ReactQueryConfigProvider config={reactQueryConfig}>
            <SettingsProvider>
              <NotificationProvider>
                <PortfolioProvider>
                  <MenuProvider>
                    <ThemeProvider>
                      <App/>
                    </ThemeProvider>
                  </MenuProvider>
                </PortfolioProvider>
              </NotificationProvider>
            </SettingsProvider>
          </ReactQueryConfigProvider>
        </ReactQueryCacheProvider>
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
