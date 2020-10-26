import {jsonFetch} from 'utilities'

export const getEthereumData = async () => {
  const data = await jsonFetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle')
  return data.result;
}