import { getPortfolioHistory } from "./getPortfolioHistory"
import {useSettings} from '../../context'
import {usePortfolio} from '../../context'
import {useQuery} from 'react-query'

export const usePortfolioHistory = () => {

  const {currency} = useSettings()
  const {assets} = usePortfolio()

  const {data, ...asyncInfo} = useQuery(['portfolio-history', currency, assets], async () => {
    return await getPortfolioHistory({assets, currency, days: 30})
  }, {initialData: []})


  return {
    history: data,
    ...asyncInfo
  }
}