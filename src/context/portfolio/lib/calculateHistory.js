import {getCoinHistory} from '../../api/lib'

export const calculateHistory = async (coins) => {
    
  let portfolioHistory = []

  for (let i = 0; i < coins.length; i++) {
    let history = coins[i].history
    for (let j = 0; j < history.length; j++) {
      portfolioHistory[j] = []
      portfolioHistory[j][0] = history[0]
      portfolioHistory[j][1] += history[1]
    }
  }
  
  return portfolioHistory
}