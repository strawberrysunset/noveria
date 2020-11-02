const defaultPortfolio = {
  assets : [],
  total : 0,
  totalBTC: 0,
  history: [],
  change: {
    '24h' : {
      value: 0,
      percentage: 0
    }
  },
  isEmpty: true
}

export const createPortfolio = ({coinData, assets: staleAssets, currency, exchangeRates}) => {
  
  if(coinData.length === 0) return defaultPortfolio

  const assets = staleAssets.map(asset => {
    const assetData = coinData.find(coin => coin.id === asset.id)
    const price = assetData.spotPrice.value * asset.amount;
    console.log(assetData.color)
    return {
      ...asset, 
      price,
      change: {
        '24h' : {
          value: assetData.spotPrice.change['24h'].value * asset.amount,
          percentage: assetData.spotPrice.change['24h'].percentage
        }
      },
      // If asset is btc, price is the amount, no neeed to convert.
      priceBTC: (assetData.symbol === 'btc') ? asset.amount : (price / exchangeRates[currency].value),
      ...assetData,
      sparkline: {
        '7d' : assetData.sparkline['7d'].filter((_, idx) => idx % 2)
      },
      color: assetData.color
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

  return {
    assets: weightedAssets, 
    total, 
    totalBTC, 
    isEmpty: weightedAssets.length === 0, 
    change : {
      '24h': {
        value : weightedAssets.reduce((total, asset) => total += asset.change['24h'].value, 0),
        percentage : weightedAssets.reduce((total, asset) => total += asset.change['24h'].percentage * asset.weight, 0)
      }
    },
    rawAssets: staleAssets
    
  }
}
