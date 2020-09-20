import {generateUniqueID} from 'utilities'
import {getCoinData} from '../../api/lib'

export async function createCoin(id, amount, currency){

  const data = await getCoinData(id, amount, currency);

  console.log(data)
  return {
    uniqueID: generateUniqueID(),
    id,
    amount,
    ...data
  }
}