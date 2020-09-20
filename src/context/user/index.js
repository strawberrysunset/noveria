import React from 'react'
import reducer from './reducer'
import { dispatchMiddleware } from './dispatchMiddleware'

const UserContext = React.createContext()

const initialState = {
  currency: 'usd',
  theme: 'dark',
  refreshRate: 60,
  historyDays: 7
}

function UserProvider({ children }) {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  
  // Load coins from local storage on initial load.
  // React.useEffect(() => {
  //   const userProfile = localStorage.getItem('noveria-user')
  //   if (userProfile) dispatch({type:'set_userProfile', userProfile})
  // }, [])

  // // Save coins when they are changed.
  // React.useEffect(() => {
  //   localStorage.setItem('noveria-user', userProfile)
  // }, [userProfile])

  return (
    <UserContext.Provider value={[state, (action) => dispatchMiddleware(dispatch, state, action)]}>
        {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUseruserProfile must be used within UserProvider')
  }
  return context
}

export { UserProvider, useUser }
