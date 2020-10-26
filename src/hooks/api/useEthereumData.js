import {useQuery} from 'react-query'
import {getEthereumData} from '../../api'

export const useEthereumData = () => {
  return useQuery('etherscan', getEthereumData, {keepPreviousData: true})
}