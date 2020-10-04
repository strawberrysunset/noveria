import {useSettings, useMenu } from '../../../context'
import {useSupportedCurrencies} from '../../../hooks/api'

export const CurrencyList = () => {

    const {currency: selectedCurrency, updateSettings} = useSettings()
    const {updateMenu} = useMenu()
    const {isLoading, supportedCurrencies} = useSupportedCurrencies()

    if (isLoading) return []

    const otherCurrencies = supportedCurrencies.filter(currency => {
      return currency !== selectedCurrency
    })

    const a = {
      onClick: () => {},
      title: selectedCurrency.toUpperCase(),
    }

    const c = otherCurrencies.sort().map(currency => {
      return {
        onClick: () => {
          updateSettings({type: 'set_currency', currency})
          updateMenu({type: 'go_back'})
        },
        title: currency.toUpperCase(),
      }
    })

    return [a, ...c]
}