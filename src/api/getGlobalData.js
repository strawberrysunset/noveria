import {jsonFetch} from 'utilities'

export async function getGlobalData({currency}) {
  const globalData = await jsonFetch('https://api.coingecko.com/api/v3/global')
  const data = globalData['data']
  return {
    marketCap: data.total_market_cap[currency],
    volume: data.total_volume[currency],
    markets: data.markets,
    dominance: data.market_cap_percentage,
    activeCoins: data.active_cryptocurrencies
  }
}
