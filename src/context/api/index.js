import React from 'react'
import reducer from './reducer'
import {useUser} from '../../context'
import {dispatchMiddleware} from './dispatchMiddleware'

const APIContext = React.createContext()

const initialState = {
  fetching: true,
  initialLoad: true,
  data : {
    coinList: [],
    supportedCurrencies: [],
    global: {},
    exchangeRates: {}
  }
}

function APIProvider({ children }) {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [timer, setTimer] = React.useState();
  const [userState] = useUser();

  React.useEffect(() => {
    dispatchMiddleware(dispatch, state, userState, {type : 'refresh'})
    .then(() => dispatch({type : 'set_initialLoad', status: false}))
  }, [])

  // Once the app loads, i.e. initialLoad changes, the timer is started. 
  // Any changes to the refresh rate will reset the timer.
  React.useEffect(() => {
    startTimer()
  }, [state.initialLoad])

  React.useEffect(() => {
    clearInterval(timer)
    startTimer()
  }, [userState.refreshRate])

  function startTimer () {
    const newTimer = setInterval(() => {
      dispatchMiddleware(dispatch, state, userState, {type: 'refresh'})
    }, userState.refreshRate * 1000);
    setTimer(newTimer);
  }

  const proxiedDispatch = (action) => dispatchMiddleware(dispatch, state, userState, action);

  return (
    <APIContext.Provider value={[state, proxiedDispatch]}>
      {children}
    </APIContext.Provider>
  )
}

function useAPI() {
  const context = React.useContext(APIContext)
  if (context === undefined) {
    throw new Error('useAPI must be used within APIProvider')
  }
  return context
}

export { APIProvider, useAPI }
