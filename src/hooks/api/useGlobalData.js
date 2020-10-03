import {useQuery} from 'react-query'
import {getGlobalData} from '../../api'
import { useSettings } from '../../context'
export const useGlobalData = () => {
  const {currency} = useSettings()
  const {data, isLoading, ...asyncInfo} = useQuery(['globalData', currency], () => getGlobalData({currency}))
  return {globalData: data, isLoading, ...asyncInfo}
}