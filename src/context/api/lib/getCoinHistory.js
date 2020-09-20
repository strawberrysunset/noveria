import {jsonFetch} from 'utilities'

export async function getCoinHistory(coin, currency, days) {
  return await jsonFetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`)
  .catch(() => [])
}