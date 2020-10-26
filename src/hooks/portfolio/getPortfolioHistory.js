import {getCoinHistory} from '../../api'

export const sumHistories = (histories) => {
  // Sum histories into a single total.
  let historyTotal = []
  for (let i = 0; i < histories.length; i++){
    const history = histories[i]
    for (let j = 0; j < history.length; j++) {
      if (i === 0) historyTotal[j] = [0, 0]
      historyTotal[j][0] = history[j][0]
      historyTotal[j][1] += history[j][1]
    }
  }
  return historyTotal
}

export async function getPortfolioHistory ({assets, currency, days}) {
  if (!assets) return []
  // Get histories.
  let histories = []
  for (let i = 0; i < assets.length; i++) {
    histories[i] = await getCoinHistory({id: assets[i].id, currency, days})
  }
  const history = sumHistories(histories)
  return history
}
