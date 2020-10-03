import { jsonFetch } from 'utilities'

export async function getCoinColor(assetID) {
  const color = await jsonFetch(`https://www.coinpalette.com/colors?coins=${assetID}`)
  if (!color){
    throw new Error('Unable to fetch color.')
  } else {
    return color
  }
}
