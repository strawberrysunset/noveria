import React from 'react'
import {useSettings, useMenu, useNotification} from '../../../context'
import {themes} from '../../../hooks/theme/themes'
import {ListItem} from './ListItem'
import {MdCheck} from 'react-icons/md'
import {capitalize} from 'utilities'

export const useThemeList = ({updateMenu}) => {

    const {theme: currentTheme, updateSettings} = useSettings()
    const {updateNotification} = useNotification()

    return Object.keys(themes).reduce((list, theme) => {
      if (theme === currentTheme) {
        return [<ListItem left={capitalize(currentTheme)} right={<MdCheck/>}/>, ...list]
      }
      return [...list, <ListItem left={capitalize(theme)} onClick={() => {
        updateSettings({type: 'set_theme', theme})
        updateMenu({type: 'go_back'})
        updateNotification({type: 'set_message', message: `Theme set to ${theme}`})
      }}/>]
    }, [])
}