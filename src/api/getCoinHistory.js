import {jsonFetch} from 'utilities'

export const getCoinHistory = async ({id, currency, days}) => {
  const {prices} = await jsonFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
  return prices
}