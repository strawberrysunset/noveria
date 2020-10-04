import {useSettings, useMenu} from '../../../context'
import {themes} from '../../../hooks/theme/themes'

export const ThemeList = () => {

    const {updateSettings} = useSettings()
    const {updateMenu} = useMenu()

    return Object.keys(themes).map(theme => {
      return {
        onClick: () => {
          updateSettings({type: 'set_theme', theme})
          updateMenu({type: 'go_back'})
        },
        title: theme[0].toUpperCase() + theme.slice(1)
      }
    }) 
}