import {useQuery, queryCache} from 'react-query'
import {getSupportedCurrencies} from '../../api'

export const useSupportedCurrencies = () => {
  const {data, ...asyncInfo} = useQuery('supportedCurrencies', getSupportedCurrencies)
  return {supportedCurrencies: data, ...asyncInfo}
}

export const prefetchSupportedCurrencies = () => {
  queryCache.prefetchQuery('supportedCurrencies', getSupportedCurrencies)
}