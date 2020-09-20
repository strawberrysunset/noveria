export default function menuReducer(state, action) {
  switch (action.type) {
    case 'set_status_showing' : {
      return {...state, status: {
        ...state.status,
        showing: action.showing
     } }
    }
    case 'set_status_message' : {
      return {...state, status: {
        ...state.status,
        message : action.message
     } }
    }
    case 'set_popUp_showing' : {
      return {...state, popUp: {
        ...state.popUp,
        showing : action.showing
     } }
    }
    case 'set_popUp_content' : {
      return {...state, popUp: {
        ...state.popUp,
        content : action.content
     } }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
