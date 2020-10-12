import React from 'react'
import {Greeting} from '../../components/pages/home/Greeting'

export const reducer = (state, action) => {

  switch (action.type) {
    case 'set_message' : {
      return {...state, message : action.message}
    }
    case 'set_popUp_content' : {
      return {...state, popUpContent: action.popUpContent}
    }
    case 'set_showPopUp': {
      return {...state, showPopUp: action.showPopUp}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const middleware = (state, dispatch, action) => {
  switch(action.type) {
    case 'showPopUp': {
      dispatch({ type: 'set_popUp_content', popUpContent: action.popUpContent })
      return dispatch({ type: 'set_showPopUp', showPopUp: true })
    }
    case 'hidePopUp': {
      dispatch({ type: 'set_showPopUp', showPopUp: false })
      return dispatch({ type: 'set_popUp_content', popUpContent: null })
    }
    default: {
      dispatch(action)
    }
  }
}

export const useNotification = () => {
  const [notification, dispatch] = React.useReducer(reducer, {
    popUpContent : <Greeting/>,
    showPopUp: true,
    message : ''
  })

  const updateNotification = (action) => middleware(notification, dispatch, action)
  return {...notification, updateNotification}
}