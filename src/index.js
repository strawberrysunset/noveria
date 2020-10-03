import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ThemeProvider,
  SettingsProvider,
  PortfolioProvider,
  MenuProvider,
  NotificationProvider
} from './context'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import {App} from './components'
import {IconContext} from 'react-icons'

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <ReactQueryCacheProvider cache={queryCache}>
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
        </ReactQueryCacheProvider>
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
