import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ThemeProvider,
  UserProvider,
  APIProvider,
  PortfolioProvider,
  MenuProvider,
  NotificationProvider
} from './context'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <UserProvider>
          <APIProvider>
            <PortfolioProvider>
              <MenuProvider>
                <ThemeProvider>
                  <App/>
                </ThemeProvider>
              </MenuProvider>
            </PortfolioProvider>
          </APIProvider>
        </UserProvider>
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
