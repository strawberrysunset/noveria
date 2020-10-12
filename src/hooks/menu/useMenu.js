import React from 'react'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_menu': {
      return {...state, isOpen: !state.isOpen }
    }
    case 'set_listName' : {
      return {...state, listName: action.listName, listNameHistory: [...state.listNameHistory, action.listName] }
    }
    case 'go_back' : {

      // Current becomes previous listName in listNameHistory.
      const listName = state.listNameHistory[state.listNameHistory.length - 2]

      // Overly complex removal of last listName although necessarily avoids direct state mutation.
      const listNameHistory = state.listNameHistory.filter((_, i) => {
        return i !== (state.listNameHistory.length - 1) 
      })      
      return {...state, listName, listNameHistory }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useMenu = () => {

  const [menu, updateMenu] = React.useReducer(reducer, {
    isOpen: false,
    listName: 'base',
    listNameHistory: ['base']
  })

  return {...menu, updateMenu}
}

