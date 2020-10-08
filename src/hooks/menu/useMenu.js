import React from 'react'
import {useBaseList} from '../../components/menu/lists'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_menu': {
      return {...state, isOpen: !state.isOpen }
    }
    case 'set_list' : {
      const listHistory = [...state.listHistory, action.list]
      return {...state, useCurrentList: action.list, listHistory }
    }
    case 'go_back' : {

      // Current becomes previous list in listHistory.
      const useCurrentList = state.listHistory[state.listHistory.length - 2]

      // Overly complex removal of last list although necessarily avoids direct state mutation.
      const listHistory = state.listHistory.filter((list, i) => {
        if (i !== (state.listHistory.length - 1)) {
          return list
        }
      })      
      return {...state, useCurrentList, listHistory }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useMenu = () => {
  const [menu, updateMenu] = React.useReducer(reducer, {
    isOpen: false,
    useCurrentList: useBaseList,
    listHistory: [useBaseList]
  })
  return {...menu, updateMenu}
}

