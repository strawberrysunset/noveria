import React from 'react'
import {useMenu, useSettings} from '../../../context'
import {useThemeList} from './ThemeList'
import {useCurrencyList} from './CurrencyList'
import {useShareList} from './ShareList'
import {ListItem} from './ListItem'
import {capitalize} from 'utilities'
import {MdKeyboardArrowRight} from 'react-icons/md'


export const useBaseList = () => {

  const {currency, theme} = useSettings()
  const {updateMenu} = useMenu()

  const setList = (list) => {
    updateMenu({type: 'set_list', list})
  }
  
  return [
    <ListItem left="Currency" right={currency.toUpperCase()} onClick={()=> setList(useCurrencyList)}/>,
    <ListItem left="Theme" right={capitalize(theme)} onClick={()=> setList(useThemeList)}/>,
    <ListItem left="Share" onClick={() => setList(useShareList)}/>
  ]
}