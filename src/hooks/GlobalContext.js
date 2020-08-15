import React, { createContext, useEffect } from 'react' 
import { useInterval, useUserProfile, useAPI } from '../hooks'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    
    const API = useAPI();
    const userProfile = useUserProfile();
    
    const { changeInterval } = useInterval({ action : API.refresh, interval : userProfile.refreshInterval });

    useEffect(() => {
        changeInterval(userProfile.refreshInterval)
    }, [userProfile.refreshInterval])
    

    return (    
        <GlobalContext.Provider value={{ API, user }}>
            { children }
        </GlobalContext.Provider>
    )
}
