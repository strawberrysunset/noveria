export const calculateTotal = (coins) => {
  return coins.reduce((total, coin) => total += coin.value, 0)
}