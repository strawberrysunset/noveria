import React from 'react'
import {useSettings, useNotification} from '../../../context'
import {hues as themes} from '../../../hooks/theme/theme'
import {ListItem} from './ListItem'
import {MdCheck} from 'react-icons/md'
import {capitalize} from 'utilities'

export const useThemeList = ({updateMenu}) => {

    const {theme: currentTheme, updateSettings} = useSettings()
    const {updateNotification} = useNotification()

    return Object.keys(themes).reduce((list, theme, idx) => {
      if (theme === currentTheme) {
        return [<ListItem key={idx} left={capitalize(theme)} right={<MdCheck/>}/>, ...list]
      }
      return [...list, <ListItem key={idx} left={capitalize(theme)} onClick={() => {
        updateSettings({type: 'set_theme', theme})
        updateMenu({type: 'go_back'})
        updateNotification({type: 'set_message', message: `Theme set to ${theme}`})
      }}/>]
    }, [])
}