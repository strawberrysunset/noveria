export async function dispatchMiddleware(dispatch, state, action) {
  switch (action.type) {
    case 'toggle_theme': {
      const theme = (state.theme === 'light') ? 'dark' : 'light'
      return dispatch({type: 'set_theme', theme})
    }
    default: {
      dispatch(action)
    }
  }
}