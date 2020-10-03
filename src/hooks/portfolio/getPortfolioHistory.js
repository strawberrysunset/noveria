import {getCoinHistory} from '../../api'

const sumHistories = (histories) => {
  let summedHistory = []
  for (let i = 0; i < histories.length; i++) {
    let history = histories[i].prices
    for (let j = 0; j < history.length; j++) {
      summedHistory[j] = new Array(history.length).fill(0)
      summedHistory[j][0] = history[j][0]
      summedHistory[j][1] += history[j][1]
    }
  }
  return summedHistory
}

export async function getPortfolioHistory ({assets = [], currency, days}) {
  const histories = await assets.reduce(async asset => {
    return await getCoinHistory({id: asset.id, currency, days})
  }, [])
  return sumHistories(histories)
}