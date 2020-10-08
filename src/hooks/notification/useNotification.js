import React from 'react'
import {createPopUp} from './createPopUp'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'set_message' : {
      return {...state, message : action.message}
    }
    case 'set_popUp' : {
      const popUp = createPopUp({handleClose: () => {}, content: action.content})
      return {...state, popUp}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const middleware = (state, dispatch, action) => {
  switch(action.type) {
    case 'showPopUp': {
      return dispatch({ type: 'set_popUp', content: action.content })
    }
    case 'hidePopUp': {
      return dispatch({ type: 'set_popUp', content: null })
    }
    default: {
      dispatch(action)
    }
  }
}

export const useNotification = () => {
  const [notification, dispatch] = React.useReducer(reducer, {
    popUp : null,
    message : 'Welcome to Noveria.'
  })
  const updateNotifcation = (action) => middleware(notification, dispatch, action)
  return {notification, updateNotifcation}
}