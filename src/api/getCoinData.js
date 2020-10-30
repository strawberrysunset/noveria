import {jsonFetch} from 'utilities'
// import {getCoinColor} from './getCoinColor'

const formatCoin = (coin) => {
  new Image().src = coin.image // Force preloading of images      
  return {
    id: coin.id,
    image: coin.image,
    symbol: coin.symbol,
    name: coin.name,
    spotPrice: {
      value: coin.current_price || 0,
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
      '7d': coin.sparkline_in_7d.price.filter((_, idx) => idx % 2)
    },
    totalVolume: coin.total_volume,
  }
}

export const getCoinData = async ({currency, limit = 500} = {}) => {
  if (!currency) throw new Error('Currency is undefined.')
  const pages = Math.ceil(limit / 250)
  const remainder = (limit - 1) % 250 + 1;
  let list = []
  for (let i = 1; i <= pages; i++) {
    const coins = await jsonFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${(i === pages) ? remainder : 250}&page=${i}&sparkline=true&price_change_percentage=7d`)
    list = [...list, ...coins] 
  }

  const formattedCoins = list.map(coin => formatCoin(coin));

  return formattedCoins
}


