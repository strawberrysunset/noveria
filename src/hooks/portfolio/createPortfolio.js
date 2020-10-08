import {getCoinData} from '../../api'

export const createPortfolio = async ({assets: staleAssets, currency, exchangeRates}) => {
  
  const data = await getCoinData({coinIDs: staleAssets.map(coin => coin.id), currency})

  const assets = staleAssets.map(asset => {
    const assetData = data.find(coin => coin.id === asset.id)
    const price = assetData.spotPrice.value * asset.amount;
    return {
      ...asset, 
      ...assetData,
      price,
      change: {
        '24h' : {
          value: assetData.spotPrice.change['24h'].value * asset.amount,
          percentage: assetData.spotPrice.change['24h'].percentage
        }
      },
      // Ternary ensures BTC asset precision error from conversion.
      priceBTC: (assetData.symbol == 'btc') ? asset.amount : (price / exchangeRates[currency].value)
    }
  })

  const [total, totalBTC] = assets.reduce((total, asset) => {
    total[0] += asset.price
    total[1] += asset.priceBTC
    return total
  }, [0, 0])

  

  const weightedAssets = assets.map(asset => {
    return {
      ...asset,
      weight: asset.price / total
    }
  })

  const change  = {
    '24h': {
      value : weightedAssets.reduce((total, asset) => total += asset.change['24h'].value, 0),
      percentage : weightedAssets.reduce((total, asset) => total += asset.change['24h'].percentage * asset.weight, 0)
    }
  } 

  return {assets: weightedAssets, total, totalBTC, change}
}
