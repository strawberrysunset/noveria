import {useUser, useAPI, useMenu} from '../../../context'

export const CurrencyList = () => {

    const [API] = useAPI()
    const [user, userDispatch] = useUser()
    const [menu, menuDispatch] = useMenu()

    return API.data.supportedCurrencies.slice(0, 10).map(currency => {
      return {
        onClick: () => {
          userDispatch({type: 'set_currency', currency})
          menuDispatch({type: 'go_back'})
        },
        title: currency.toUpperCase(),
      }
    })
}