import React from 'react'
import reducer from './reducer'
import {BaseList} from '../../components/menu/lists'

const MenuContext = React.createContext()

const initialState = {
  showing: false,
  currentList: BaseList, 
  history: [BaseList]
}

function MenuProvider({ children }) {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <MenuContext.Provider value={[state, dispatch]}>
      {children}
    </MenuContext.Provider>
  )
}

function useMenu() {
  const context = React.useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within MenuProvider')
  }
  return context
}


export {MenuProvider, useMenu}
