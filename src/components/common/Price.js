import {useSettings} from '../../context'
import React from 'react'
import {Spinner} from '../common'

export const Price = ({ children: price, currency }) => {
  const {currency: baseCurrency} = useSettings()
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', currency: (currency || baseCurrency).toUpperCase()
  }).format(price || 0);
}
