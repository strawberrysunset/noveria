export default function menuReducer(state, action) {
  switch (action.type) {
    case 'toggle_menu': {
      return {...state, showing: !state.showing }
    }
    case 'set_list' : {
      const currentList = action.list
      const history = [...state.history, action.list]
      
      return {...state, currentList, history }
    }
    case 'go_back' : {

      // Current becomes previous list in history.
      const currentList = state.history[state.history.length - 2]

      // Overly complex removal of last item although necessarily avoids direct state mutation.
      const history = state.history.filter((item, i) => {
        if (i !== (state.history.length - 1)) {
          return item
        }
      })      
      return {...state, currentList, history }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
