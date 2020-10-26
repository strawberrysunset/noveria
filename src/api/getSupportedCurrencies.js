import { jsonFetch } from 'utilities'

export const getSupportedCurrencies = async () => {
  const data = await jsonFetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
  return data.sort()
}
