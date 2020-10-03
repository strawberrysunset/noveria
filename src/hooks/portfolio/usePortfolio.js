import React from 'react'
import {useQuery} from 'react-query'
import {generateUniqueID} from 'utilities'
import {useSettings} from '../../context'
import {createPortfolio} from './createPortfolio'
import {useExchangeRates, useSupportedCurrencies} from '../../hooks/api'
import {getPortfolioHistory} from './getPortfolioHistory'

export const reducer = (assets, action) => {
  switch (action.type) {
    case 'create_asset': {
      return [...assets, action.asset]
    }
    case 'remove_asset': {
      return assets.filter((asset) => action.id !== asset.uniqueID)
    }
    case 'remove_all_assets': {
      return []
    }
    case 'set_portfolio' : {
      return action.portfolio
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const middleware = (dispatch, action) => {
  
  switch (action.type) {
    case 'create_asset' : {
      if (!action.amount || action.amount.match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) === null) {
        throw new Error('Specified amount is not valid.')
      }
      if (!action.id) {
        throw new Error('Asset id is undefined.')
      }
      const asset = {
        uniqueID: generateUniqueID(),
        id: action.id,
        amount: parseFloat(action.amount),
      }
      return dispatch({type: 'create_asset', asset})
    }
    default: {
      dispatch(action)
    }
  }
}

const defaultPortfolio = {
  assets : [],
  total : {
    default: 0,
    btc: 0
  },
  change: {
    '24h' : {
      value: 0,
      percentage: 0
    }
  }
}

export const usePortfolio = () => {

  const [assets, dispatch] = React.useReducer(reducer, [])
  const updatePortfolio = (action) => middleware(dispatch, action)
  
  const {currency} = useSettings()
  const {supportedCurrencies} = useSupportedCurrencies() 
  const {exchangeRates} = useExchangeRates()

  const {data: portfolio, ...asyncInfo} = useQuery(['portfolio-data', supportedCurrencies, assets, currency], async () => {
    return createPortfolio({assets, currency, exchangeRates})
  })

  const usePortfolioHistory = ({days}) => {
    const {data: history, ...asyncInfo} = useQuery(['portfolio-history', portfolio?.assets, currency, days], () => {
      return getPortfolioHistory({assets: portfolio?.assets, currency, days})
    })
    return {history, ...asyncInfo}
  }


  return {
    ...(portfolio), 
    ...asyncInfo, 
    usePortfolioHistory, 
    updatePortfolio
  }
}

