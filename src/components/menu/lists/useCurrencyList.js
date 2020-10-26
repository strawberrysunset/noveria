import React from 'react'
import {useSettings, useNotification} from '../../../context'
import {useSupportedCurrencies} from '../../../hooks/api'
import {MdCheck} from 'react-icons/md'
import {ListItem} from './ListItem'

export const useCurrencyList = ({updateMenu}) => {

  const {currency: currentCurrency, updateSettings} = useSettings()
  const {data: supportedCurrencies}= useSupportedCurrencies()
  const {updateNotification} = useNotification()

  // Put selected currency at top of currency list.
  return supportedCurrencies.reduce((list, currency, idx) => {
    if (currency === currentCurrency) {
      return [<ListItem key={idx} left={currentCurrency.toUpperCase()} right={<MdCheck/>}/>, ...list]
    } 
    const handleClick = () => {
      updateSettings({type: 'set_currency', currency})
      updateNotification({type: 'set_message', message: `Currency set to ${currency.toUpperCase()}`})
      updateMenu({type: 'go_back'})
    }
    return [...list, <ListItem key={idx} left={currency.toUpperCase()} onClick={handleClick}/>]
  }, [])
}