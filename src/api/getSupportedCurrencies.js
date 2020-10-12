import { jsonFetch } from 'utilities'

export const getSupportedCurrencies = () => {
  return jsonFetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
}
