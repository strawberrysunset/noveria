import React from 'react'
import {useSettings, useMenu} from '../../../context'
import {themes} from '../../../hooks/theme/themes'
import {ListItem} from './ListItem'
import {MdCheck} from 'react-icons/md'
import {capitalize} from 'utilities'

export const useThemeList = () => {

    const {theme: currentTheme, updateSettings} = useSettings()

    return Object.keys(themes).reduce((list, theme) => {
      console.log({theme, list})
      if (theme === currentTheme) {
        list.unshift(<ListItem left={capitalize(currentTheme)} right={<MdCheck/>}/>)
        return list
      }
      return [...list, <ListItem left={capitalize(theme)} onClick={() => updateSettings({type: 'set_theme', theme})}/>]
    }, [])
}