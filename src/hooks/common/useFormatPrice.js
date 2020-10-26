import React from 'react'
import {useSettings} from '../../context'
export const useFormatPrice = () => {
  const {currency: baseCurrency} = useSettings()

  const formatPrice = React.useCallback((price, currency = undefined) => {
    const selectedCurrency = (currency || baseCurrency).toUpperCase()
    try {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: selectedCurrency,
        currencyDisplay: 'narrowSymbol'
      }).format(price || 0)
    } catch (err) {
      return selectedCurrency.toUpperCase() + Number(price.toFixed(2))
    }
  }, [baseCurrency])
  
  return {formatPrice}
}