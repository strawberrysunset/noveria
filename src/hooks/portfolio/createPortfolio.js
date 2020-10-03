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
      // Ternary ensures BTC asset precision error from conversion.
      priceBTC: asset.symbol === 'btc' ? asset.amount : (price / exchangeRates[currency].value)
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
  return {assets: weightedAssets, total, totalBTC}
}
