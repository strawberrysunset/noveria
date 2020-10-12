import {getCoinData} from '../../api'
import React from 'react'
import {usePaginatedQuery, queryCache} from 'react-query'
import {useSettings} from '../../context'
import { useEffect } from 'react'
export const useCoinData = ({coins = undefined, page, perPage} = {}) => {
  const {currency} = useSettings()
  const key = ['coin', page, perPage, coins, currency]

  // Preload next page
  React.useEffect(() => {
    queryCache.prefetchQuery(key, getCoinData({currency, coins, page: page + 1, perPage}))
  }, [page])
  
  const {data, ...asyncInfo} = usePaginatedQuery(key, async () => {
    return getCoinData({currency, coins, page, perPage})
  })
  
  return {coinData: data || [], ...asyncInfo}
  // sort out pagination here
}