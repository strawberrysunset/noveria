import {getCoinData} from '../../api'
import {useQuery} from 'react-query'
import {useSettings} from '../../context'

export const useCoinData = ({config} = {}) => {

  const {currency} = useSettings()

  // Fetch coinData.
  return useQuery(['coinData', currency], async () => {
    return await getCoinData({currency})
  }, {initialData: [], staleTime: 30, ...config})

}
