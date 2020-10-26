import React from 'react'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'set_message' : {
      return {...state, message : action.message}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useNotification = () => {
  const [notification, updateNotification] = React.useReducer(reducer, {
    message : 'Welcome to Noveria'
  })
  return {...notification, updateNotification}
}