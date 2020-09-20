import React from 'react'
import reducer from './reducer'
import * as actions from './actions'

const NotificationStateContext = React.createContext()
const NotificationDispatchContext = React.createContext()

const initialState = {
  popUp : {
    showing: false,
    content: undefined
  },
  status : {
    showing: true,
    message : 'Welcome to Noveria.'
  }
}

function NotificationProvider({ children }) {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <NotificationStateContext.Provider value={state}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationStateContext.Provider>
  )
}

function useNotificationState() {
  const context = React.useContext(NotificationStateContext)
  if (context === undefined) {
    throw new Error(
      'useNotificationState must be used within a NotificationProvider'
    )
  }
  return context
}

function useNotificationDispatch() {
  const context = React.useContext(NotificationDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useNotificationDispatch must be used within a NotificationProvider'
    )
  }
  return context
}

// Merge state and dispatch into one hook, less verbose.
function useNotification() {
  return [useNotificationState(), useNotificationDispatch(), actions]
}

export { NotificationProvider, useNotification }
