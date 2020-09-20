import {useAPI, useUser} from '../../context'

export const Currency = ({ children, currency: currencyOverride }) => {

  const [{data}] = useAPI()
  const [{currency: userCurrency}] = useUser()

  const currency = currencyOverride || userCurrency

  const convertedValue = children //* data.exchangeRates[currency].value

  // const value = children * data.exchangeRates[currency].value
  const formattedValue = new Intl.NumberFormat('en-US', { 
    style: 'currency', currency: currency.toUpperCase()
  }).format(convertedValue);
  
  return formattedValue
}