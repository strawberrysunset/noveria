import React from 'react'
import {useSettings} from '../../context'
import {createPortfolio} from './createPortfolio'
import {useExchangeRates, useCoinData} from '../../hooks/api'
import {useCustomReducer} from '../misc'
import {generateUniqueID} from 'utilities'

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

export const asyncMiddleware = async (state, dispatch, action) => {
  switch (action.type) {
    case 'create_asset' : {
      if (!action.amount || String(action.amount).match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) === null) {
        throw new Error('Amount must be a positive number.')
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

export const logger = (state) => {
 
}



export const usePortfolio = () => {

  const [assets, updatePortfolio] = useCustomReducer({
    reducerArgs: [reducer, []],
    middleware: [asyncMiddleware, logger],
    saveToLocalStorage: {
      isEnabled: true,
      key: 'noveria--portfolio', 
    }
  })

  const {currency} = useSettings()
  const {data: exchangeRates} = useExchangeRates({config: {isEnabled: currency}})
  const {data: coinData, ...async} = useCoinData({config: {isEnabled: exchangeRates && currency}});
  const portfolio = React.useMemo(() => createPortfolio({coinData, assets, currency, exchangeRates, updatePortfolio}), [coinData, assets, currency, exchangeRates, updatePortfolio]);
  return {...portfolio, updatePortfolio, ...async}
}


// const {data, ...asyncInfo} = useQuery(['noveria-portfolio', coins, assets, currency, exchangeRates], async () => {
//   return await 
// }, {keepPreviousData: true, initialData: defaultPortfolio, enabled: coins && !isLoading})
