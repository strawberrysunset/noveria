import {jsonFetch} from 'utilities'
import {getCoinColor} from './getCoinColor'

export const getCoinData = async ({coinIDs = '', currency ='btc', page = 1, perPage = 250} = {}) => {
  const data = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinIDs}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`)
  // const colors = await getCoinColor(coinIDs).catch(() => '#ccc')
  return data.map(coin => {
    return {
      id: coin.id,
      image: coin.image,
      symbol: coin.symbol,
      name: coin.name,
      supply : {
        circulating: coin.circulating_supply,
        max: coin.max_supply
      },
      spotPrice: {
        value: coin.current_price,
        change: {
          '24h' : {
            value: coin.price_change_24h,
            percentage: coin.price_change_percentage_24h,
          }
        }
      },
      supply: coin.circulating_supply,
      marketCap: {
        value: coin.market_cap,
        change: {
          '24h': {
            value: coin.market_cap_change_24h,
            percentage: coin.market_cap_change_percentage_24h
          }
        }
      },
      sparkline: {
        '7d': coin.sparkline_in_7d.price
      },
      totalVolume: coin.total_volume,
      color: '#114287'
    }
  })
}
