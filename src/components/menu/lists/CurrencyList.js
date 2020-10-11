import React from 'react'
import {useSettings, useMenu} from '../../../context'
import {useSupportedCurrencies} from '../../../hooks/api'
import {MdCheck} from 'react-icons/md'
import {ListItem} from './ListItem'


// const supportedCurrencies = [
//   "btc",
//   "eth",
//   "ltc",
//   "bch",
//   "bnb",
//   "eos",
//   "xrp",
//   "xlm",
//   "link",
//   "dot",
//   "yfi",
//   "usd",
//   "aed",
//   "ars",
//   "aud",
//   "bdt",
//   "bhd",
//   "bmd",
//   "brl",
//   "cad",
//   "chf",
//   "clp",
//   "cny",
//   "czk",
//   "dkk",
//   "eur",
//   "gbp",
//   "hkd",
//   "huf",
//   "idr",
//   "ils",
//   "inr",
//   "jpy",
//   "krw",
//   "kwd",
//   "lkr",
//   "mmk",
//   "mxn",
//   "myr",
//   "nok",
//   "nzd",
//   "php",
//   "pkr",
//   "pln",
//   "rub",
//   "sar",
//   "sek",
//   "sgd",
//   "thb",
//   "try",
//   "twd",
//   "uah",
//   "vef",
//   "vnd",
//   "zar",
//   "xdr",
//   "xag",
//   "xau"
// ]
export const useCurrencyList = () => {

  const {currency: currentCurrency, updateSettings} = useSettings()
  const {updateMenu} = useMenu()
  const {supportedCurrencies}= useSupportedCurrencies()

  return supportedCurrencies.reduce((list, currency, idx) => {
    // Always put selected currency at top of currency list.
    if (currency === currentCurrency) {
      list.unshift(<ListItem key={idx} left={currentCurrency.toUpperCase()} right={<MdCheck/>}/>)
    } else {
      list.push(<ListItem key={idx} left={currency.toUpperCase()} onClick={() => {
        updateSettings({type: 'set_currency', currency})
        updateMenu({type: 'go_back'})
      }}/>)
    }
    return list
  }, [])
}