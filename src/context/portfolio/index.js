import React from 'react'
import {useAPI, useUser} from '../../context'
import reducer from './reducer'
import { dispatchMiddleware } from "./dispatchMiddleware";
import { useLocalStorageSync } from '../../utils'
import { calculateHistory, calculateTotal, addWeights } from './lib';


const PortfolioContext = React.createContext()

function PortfolioProvider({ children }) {

  const [userState] = useUser()

  const [coins, dispatch] = React.useReducer(reducer, [])

  const total = calculateTotal(coins)
  const history = [] //calculateHistory(coins)
  const weightedCoins = addWeights(coins, total)

  // useLocalStorageSync(portfolio, "noveria-coins", (localStorageState) => {
  //   dispatch({type: 'set_coins', localStorageState})
  // })

  const portfolio = {
    coins: weightedCoins,
    total,
    history
  }

  const middleware = (action) => dispatchMiddleware(dispatch, userState, action)

  return (
    <PortfolioContext.Provider value={[portfolio, middleware]}>
      {children}
    </PortfolioContext.Provider>
  )
}

function usePortfolio() {
  const context = React.useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}

export { PortfolioProvider, usePortfolio }
