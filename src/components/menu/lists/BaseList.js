import {useSettings} from '../../../context'
import {ThemeList} from './ThemeList'
import {CurrencyList} from './CurrencyList'
import {ShareList} from './ShareList'
import {SaveList} from './SaveList'

export const BaseList = () => {

  const {currency, theme} = useSettings()
  
  return [
    {
      title: "Currency",
      subtitle: currency.toUpperCase(),
      subItems: CurrencyList
    },
    {
      title: "Theme",
      subtitle: theme[0].toUpperCase() + theme.slice(1),
      subItems: ThemeList
    },
    {
      title: 'Save Settings',
      subItems: SaveList
    },
    {
      title: "Share",
      subItems: ShareList
    }
  ]
}