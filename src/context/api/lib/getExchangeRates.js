import {jsonFetch} from 'utilities'

export async function getExchangeRates() {
  const data = await jsonFetch('https://api.coingecko.com/api/v3/exchange_rates')
  return data['rates']
}