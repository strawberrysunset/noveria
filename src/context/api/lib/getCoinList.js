import {formatCurrency, formatPercentage, jsonFetch} from 'utilities'

export async function getCoinList(currency) {
  // let coinList = []
  // const pageCount = Math.floor(count / 250)
  // for (let page = 1; page <= pageCount; page++) {
  //   const perPage = (page === pageCount) ? (count % 250) : 250
    
    
  //   coinList.push(...coins) 
  // }
  const coinList = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=true`)
  return coinList
}

// function formatCoinList (coinList, userState, exchangeRates) {
//   return coinList.map(coin => {
//     const price = coin.current_price
//     const fiatPrice = price * exchangeRates[userState.currency.raw].value
//     price_change_24h
//   
//     return {
//       id: coin.id,
//       symbol : coin.symbol,
//       name : coin.name,
//       // price: coin.market_data.,
//       change: {
//         '24h': coin.price_change_percentage_24h || 0 
//       }
//     }
//   })
// }
