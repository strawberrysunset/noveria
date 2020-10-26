import {getCoinData} from '../../api'
import {useQuery} from 'react-query'
import {useSettings} from '../../context'

export const useCoinData = ({page, perPage, config} = {}) => {
  const {currency} = useSettings()
  return useQuery(['coinData', currency], async () => {
    console.log('FETCHING COIN DATA', currency)
    return await getCoinData({currency})
  }, {keepPreviousData: true, initialData: [], staleTime: 30, ...config})
}
