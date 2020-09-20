import {jsonFetch} from 'utilities'

export async function getGlobalData() {
  const globalData = await jsonFetch('https://api.coingecko.com/api/v3/global')
  return globalData;
}
