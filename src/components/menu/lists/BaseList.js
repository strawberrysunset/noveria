import {useMenu, useUser} from '../../../context'
import {ThemeList} from './ThemeList'
import {CurrencyList} from './CurrencyList'
import {RefreshRateList} from './RefreshRateList'
import {ShareList} from './ShareList'

export const BaseList = () => {

  const [user] = useUser()
  const [menu, menuDispatch] = useMenu()

  // this should return an array of components so that we can add Links where appropriate?
  // means we are not limiting menu items all the time
  
  return [
    {
      title: "Currency",
      subtitle: user.currency.toUpperCase(),
      subList: CurrencyList
    },
    {
      title: "Auto Refresh",
      subtitle :user.refreshRate.toString() + 's',
      subList: RefreshRateList
    },
    {
      title: "Theme",
      subtitle: user.theme[0].toUpperCase() + user.theme.slice(1),
      subList: ThemeList
    },
    {
      title: "Share",
      subList: ShareList
    }
  ]
}