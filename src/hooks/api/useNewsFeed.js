import {useQuery} from 'react-query'
import {getNewsFeed} from '../../api'

export const useNewsFeed = () => {
  const {data, ...asyncInfo} = useQuery('newsFeed', getNewsFeed)
  return {news: data, ...asyncInfo}
}