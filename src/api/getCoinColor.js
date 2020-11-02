import { jsonFetch } from 'utilities'

export const getCoinColor = async ({assets}) => {
  if (!assets) return []
  const queryString = assets.reduce((string, asset, idx) => {
    string += `${(idx !== 0) ? ',' : ''}${asset.id}`
    return string
  }, '')
  const colors = await jsonFetch(`https://www.coinpalette.com/colors?coins=${queryString}`, {})
  if (!colors){
    throw new Error('Unable to fetch colors.')
  } else {
    return colors
  }
}
