import React from 'react'
import {useSettings, useMenu} from '../../../context'
import {useSupportedCurrencies} from '../../../hooks/api'
import {MdCheck} from 'react-icons/md'
import {ListItem} from './ListItem'

export const useCurrencyList = () => {

  const {currency: currentCurrency, updateSettings} = useSettings()
  const {supportedCurrencies} = useSupportedCurrencies()

  return !supportedCurrencies ? [] : supportedCurrencies.reduce((list, currency) => {
    console.log(typeof list)
    if (currency === currentCurrency) {
      list.unshift(<ListItem left={currentCurrency.toUpperCase()} right={<MdCheck/>}/>)
    } else {
      list.push(<ListItem left={currency.toUpperCase()} onClick={() => updateSettings({type: 'set_currency', currency})}/>)
    }
    return list
  }, [])

}