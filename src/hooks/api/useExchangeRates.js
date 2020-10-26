import {useQuery} from 'react-query'
import {getExchangeRates} from '../../api'

export const useExchangeRates = ({config = {}} = {}) => {
  return useQuery('exchangeRates', getExchangeRates, {initialData: [], keepPreviousData: true, ...config})
}