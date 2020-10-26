export const getAssetStatistics = ({assets}) => {
  
  const bestPerformingAsset = assets.reduce((previous, asset) => {
    if (!previous) return asset
    return (asset.change['24h'].percentage > previous.change['24h'].percentage) ? asset : previous
  }, undefined)
  
  const worstPerformingAsset = assets.reduce((previous, asset) => {
    if (!previous) return asset
    return (asset.change['24h'].percentage < previous.change['24h'].percentage) ? asset : previous
  }, undefined)
  
  const highestValueAsset = assets.reduce((previous, asset) => {
    if (!previous) return asset
    return (asset.price > previous.price) ? asset : previous
  }, undefined)
  
  const lowestValueAsset = assets.reduce((previous, asset) => {
    if (!previous) return asset
    return (asset.price < previous.price) ? asset : previous
  }, undefined)

  return {
    lowestValueAsset, 
    highestValueAsset, 
    bestPerformingAsset, 
    worstPerformingAsset
  }
}

