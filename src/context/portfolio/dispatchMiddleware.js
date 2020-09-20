import {createCoin} from './lib'

export async function dispatchMiddleware(dispatch, userState, action) {
  switch (action.type) {
    case 'add_coin': {
      const coin = await createCoin(action.id, action.amount, userState.currency, userState.historyDays)
      return dispatch({type: 'add_coin', coin})
    }
    default: {
      dispatch(action)
    }
  }
}


// case 'update_portfolio': {
//   const coins = await Promise.all(portfolio.coins.map(async coin => {
//     const data = await getCoinData(coin.id, coin.amount)
//     return {...coin, ...data}
//   }))
//   const newPortfolio = {
//     coins : addWeights(coins),
//     total : calculateTotal(coins),
//     // history : await calculateHistory(coins, userState.currency)
//   }
//   dispatch({type: 'set_portfolio', portfolio: newPortfolio})
//   return 
// }