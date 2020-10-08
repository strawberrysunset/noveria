import {useQuery, queryCache} from 'react-query'
import {getSupportedCurrencies} from '../../api'

export const useSupportedCurrencies = () => {
  const {data, ...asyncInfo} = useQuery('supportedCurrencies', getSupportedCurrencies)
  const supportedCurrencies = data ? data.sort() : undefined
  return {supportedCurrencies, ...asyncInfo}
}

export const prefetchSupportedCurrencies = () => {
  queryCache.prefetchQuery('supportedCurrencies', getSupportedCurrencies)
}