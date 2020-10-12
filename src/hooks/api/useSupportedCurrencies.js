import {useQuery} from 'react-query'
import {getSupportedCurrencies} from '../../api'

export const useSupportedCurrencies = () => {
  const {data, ...asyncInfo} = useQuery('supportedCurrencies', getSupportedCurrencies, {forceFetchOnMount: true, initialData: [], keepPreviousData: true})
  return {supportedCurrencies: data.sort(), ...asyncInfo}
}

// export const prefetchSupportedCurrencies = () => {
//   queryCache.prefetchQuery('supportedCurrencies', getSupportedCurrencies)
// }