import {getCoinHistory} from '../../api'

const sumHistories = (histories) => {
  return histories.reduce((total, history) => {
    console.log({history})
    history.forEach((el, idx) => {
      total[idx][0] = el[0]
      total[idx][1] += el[1]
    }, )
    return total
  }, Array(histories[0].length).fill([0, 0]))
}

export async function getPortfolioHistory ({assets = [], currency, days}) {
  const histories = await Promise.all(assets.map(async asset => {
    return await getCoinHistory({id: asset.id, currency, days})
  }, []))
  return sumHistories(histories)
}