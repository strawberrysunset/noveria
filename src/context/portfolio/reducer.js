export default function portfolioReducer(coins, action) {
  switch (action.type) {
    case 'add_coin' : {
      return [...coins, action.coin]
    }
    case 'remove_coin': {
      return coins.filter((coin) => action.id !== coin.uniqueID)
    }
    case 'remove_all_coins': {
      return []
    }
    case 'set_coins' : {
      return action.coins
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
