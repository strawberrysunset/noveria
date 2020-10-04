import {getCoinData} from '../../api'
import {usePaginatedQuery, queryCache} from 'react-query'
import {useSettings} from '../../context'
export const useCoinData = ({coins = undefined, page, perPage} = {}) => {
  const {currency} = useSettings()
  const key = ['coin', page, perPage, coins, currency]
  // queryCache.prefetchQuery(key, getCoinData({currency, coins, page: page + 1, perPage}))
  const {data, ...asyncInfo} = usePaginatedQuery(key, async () => getCoinData({currency, coins, page, perPage}))
  return {coinData: data || [], ...asyncInfo}
  // sort out pagination here
}