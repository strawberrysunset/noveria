import {useQuery} from 'react-query'
import {getNewsFeed} from '../../api'

export const useNewsFeed = () => {
  return useQuery('newsFeed', getNewsFeed, {keepPreviousData: true, initialData: []})
}