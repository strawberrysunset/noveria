import {useUser, useMenu} from '../../../context'
import themes from '../../../context/theme/themes'


export const ThemeList = () => {

    const [user, userDispatch] = useUser()
    const [menu, menuDispatch] = useMenu()

    return Object.keys(themes).map(theme => {
      return {
        onClick: () => {
          userDispatch({type: 'set_theme', theme})
          menuDispatch({type: 'go_back'})
        },
        title: theme[0].toUpperCase() + theme.slice(1)
      }
    }) 
}