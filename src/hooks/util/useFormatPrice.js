import React from 'react'
export const useFormatPrice = ({currency: baseCurrency}) => {
  const formatPrice = React.useCallback((price, currency = undefined) => {
    const selectedCurrency = (currency || baseCurrency).toUpperCase()
    try {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: selectedCurrency,
        currencyDisplay: 'symbol'
      }).format(price || 0)
    } catch (err) {
      return selectedCurrency.toUpperCase() + Number(price.toFixed(2))
    }
  }, [baseCurrency])
  return {formatPrice}
}