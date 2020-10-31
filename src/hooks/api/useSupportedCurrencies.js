import {useQuery} from 'react-query'
import {getSupportedCurrencies} from '../../api'

export const useSupportedCurrencies = () => {
  return useQuery('supportedCurrencies', getSupportedCurrencies, {initialData: []})
}