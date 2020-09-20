import {jsonFetch} from 'utilities'
import {getCoinColor} from '../lib'
import { getCoinHistory } from './getCoinHistory'

export async function getCoinData (coin, amount, currency, historyDays) {

  const coinData = await jsonFetch(`https://api.coingecko.com/api/v3/coins/${coin}?localization=english&sparkline=true`)
  .catch(() => {
    throw new Error(`Unable to fetch data for ${coin}`)
  })
  
  return {
    name: coinData.name,
    symbol: coinData.symbol,
    circulating_supply:coinData.circulating_supply,
    market_cap: coinData.market_cap,
    image: coinData.image.small,
    history: await getCoinHistory(coin, currency, historyDays),
    value: coinData.market_data.current_price[currency] * amount,
    color: await getCoinColor(coin).catch(() => '#ccc')
  }
}
