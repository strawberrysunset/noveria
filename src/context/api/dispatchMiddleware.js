import {getExchangeRates, getCoinList, getGlobalData, getSupportedCurrencies} from './lib'

export async function dispatchMiddleware(dispatch, state, userState, action) {
  switch (action.type) {
    case 'refresh': {
      dispatch({type: 'set_fetching', status: true})
      const data = {
        exchangeRates: await getExchangeRates(),
        coinList:  await getCoinList(userState.currency),
        global: formatGlobal(await getGlobalData(), userState.currency),
        supportedCurrencies: await getSupportedCurrencies()
      }
      dispatch({type: 'set_data', data})
      dispatch({type: 'set_fetching', status: false})
      return
    }
    default : {
      dispatch(action)
    }
  }

}

function formatGlobal (global, currency) {
  const data = global.data
  return {
    ...data,
    total_market_cap: data.total_market_cap[currency]
  }
}