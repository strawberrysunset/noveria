import React from 'react'
import {BaseList} from '../../components/menu/lists'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_menu': {
      return {...state, isOpen: !state.isOpen }
    }
    case 'set_items' : {
      const items = action.items
      const itemsHistory = [...state.itemsHistory, action.items]
      return {...state, items, itemsHistory }
    }
    case 'go_back' : {

      // Current becomes previous items in itemsHistory.
      const items = state.itemsHistory[state.itemsHistory.length - 2]

      // Overly complex removal of last items although necessarily avoids direct state mutation.
      const itemsHistory = state.itemsHistory.filter((items, i) => {
        if (i !== (state.itemsHistory.length - 1)) {
          return items
        }
      })      
      return {...state, items, itemsHistory }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useMenu = () => {
  const [menu, updateMenu] = React.useReducer(reducer, {
    isOpen: false,
    items: BaseList,
    itemsHistory: [BaseList]
  })
  return {...menu, updateMenu}
}

