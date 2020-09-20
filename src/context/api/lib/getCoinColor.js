import { jsonFetch } from 'utilities'

export async function getCoinColor(coinID) {
  const color = await jsonFetch(`https://www.coinpalette.com/colors?coins=${coinID}`)
  if (!color){
    throw new Error('Unable to fetch color.')
  } else {
    return color
  }
}
