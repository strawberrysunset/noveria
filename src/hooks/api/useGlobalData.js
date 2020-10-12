import {useQuery} from 'react-query'
import {getGlobalData} from '../../api'
import { useSettings } from '../../context'

export const useGlobalData = () => {
  const {currency} = useSettings()
  const {data, ...asyncInfo} = useQuery(['globalData', currency], async () => {
    return await getGlobalData({currency})
  })
  return {globalData: data, ...asyncInfo}
}