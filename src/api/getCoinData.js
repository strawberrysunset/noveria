import {jsonFetch} from 'utilities'
import {getCoinColor} from './getCoinColor'

export const getCoinData = async ({coinIDs = '', currency ='btc', page = 1, perPage = 250} = {}) => {
  const data = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinIDs}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=7d`)
  // const colors = await getCoinColor(coinIDs).catch(() => '#ccc')
  return data.map(coin => {

    new Image().src = coin.image // Force preloading of images
    
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
          '1h' : {
            percentage: coin.price_change_percentage_1h_in_currency || 0,
          },
          '24h' : {
            value: coin.price_change_24h || 0,
            percentage: coin.price_change_percentage_24h || 0,
          },
          '7d' : {
            percentage: coin.price_change_percentage_7d_in_currency || 0
          }
        }
      },
      ath: coin.ath,
      supply: coin.circulating_supply,
      supplyMax: coin.max_supply,
      marketCap: {
        value: coin.market_cap,
        change: {
          '24h': {
            value: coin.market_cap_change_24h || 0,
            percentage: coin.market_cap_change_percentage_24h || 0
          }
        }
      },
      sparkline: {
        '7d': coin.sparkline_in_7d.price.reduce((total, data, idx) => {
          return (idx % 2) ? [...total, data] : total
        }, [])
      },
      totalVolume: coin.total_volume,
      color: '#114287'
    }
  })
}
