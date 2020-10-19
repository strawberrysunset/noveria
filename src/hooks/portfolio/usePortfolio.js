import React from 'react'
import {useQuery, useQueryCache} from 'react-query'
import {useSettings} from '../../context'
import {createPortfolio} from './createPortfolio'
import {useExchangeRates} from '../../hooks/api'
import {getPortfolioHistory} from './getPortfolioHistory'
import {useCustomReducer} from '../misc'
import { generateUniqueID } from 'utilities'

export const reducer = (assets, action) => {
  switch (action.type) {
    case 'create_asset': {
      return [...assets, action.asset]
    }
    case 'remove_asset': {
      return assets.filter((asset) => asset.uniqueID !== action.uniqueID)
    }
    case 'remove_all_assets': {
      return []
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const middleware = async (state, dispatch, action) => {
  switch (action.type) {
    case 'create_asset' : {
      if (!action.amount || String(action.amount).match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) === null) {
        throw new Error('Specified amount is not valid.')
      }
      if (!action.id) {
        throw new Error('Asset id is undefined.')
      }
      const asset = {
        id: action.id,
        amount: Number(action.amount),
        uniqueID: generateUniqueID()
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
  total : 0,
  totalBTC: 0,
  change: {
    '24h' : {
      value: 0,
      percentage: 0
    }
  },
  isEmpty: true
}

export const usePortfolio = () => {

  const [assets, updatePortfolio] = useCustomReducer({
    reducerArgs: [reducer, []],
    middleware,
    saveToLocalStorage: {
      isEnabled: true,
      key: 'noveria-portfolio', 
    }
  })

  const {currency} = useSettings()
  const {exchangeRates} = useExchangeRates()
  const [historyDays, setHistoryDays] = React.useState()
  const queryCache = useQueryCache()

  const {data, ...asyncInfo} = useQuery(['portfolio-data', assets, currency, exchangeRates], () => {
    return createPortfolio({assets, currency, exchangeRates})
  }, {keepPreviousData: true, initialData: defaultPortfolio})

  return {
    ...data, 
    ...asyncInfo, 
    setHistoryDays, 
    updatePortfolio,
    refresh: () => queryCache.refetchQueries(['portfolio-data', assets, currency, exchangeRates]),
    rawAssets: assets
  }
}

// const usePortfolioHistory = ({days}) => {
//   const {data: history, ...asyncInfo} = useQuery(['portfolio-history', portfolio.assets, currency, days], () => {
//     return 
//   })
//   return {history, ...asyncInfo}
// }

