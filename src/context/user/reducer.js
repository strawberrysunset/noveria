export default function userReducer(state, action) {
  switch (action.type) {
    case 'set_currency': {
      return { ...state, currency: action.currency}
    }
    case 'set_theme': {
      return { ...state, theme: action.theme}
    }
    case 'set_refreshRate': {
      return { ...state, refreshRate: action.refreshRate}
    }
    case 'set_historyRange':{
      return {
        ...state,
        historyRange: action.historyRange
      }
    }
    case 'set_userProfile' : {
      return action.userProfile
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
