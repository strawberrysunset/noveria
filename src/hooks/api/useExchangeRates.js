import {useQuery} from 'react-query'
import {getExchangeRates} from '../../api'

export const useExchangeRates = () => {
  const {data, ...asyncInfo} = useQuery('exchangeRates', getExchangeRates)
  return {exchangeRates: data, ...asyncInfo}
}