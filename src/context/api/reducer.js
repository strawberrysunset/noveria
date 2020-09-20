export default function dataReducer(state, action) {
  switch (action.type) {
    case 'set_fetching': {
      return { ...state, fetching: action.status }
    }
    case 'set_data': {
      return { ...state, data: action.data }
    }
    case 'set_initialLoad': {
      return { ...state, initialLoad: action.status }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
