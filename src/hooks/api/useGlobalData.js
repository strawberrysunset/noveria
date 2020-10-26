import {useQuery} from 'react-query'
import {getGlobalData} from '../../api'
import { useSettings } from '../../context'

export const useGlobalData = () => {
  const {currency} = useSettings()
  return useQuery(['globalData', currency], async () => {
    return await getGlobalData({currency})
  })
}