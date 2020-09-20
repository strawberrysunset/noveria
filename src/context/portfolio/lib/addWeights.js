export const addWeights = (coins, total) => {
  return coins.map(coin => {
    coin.weight = coin.value / total
    return coin
  }, [])
}