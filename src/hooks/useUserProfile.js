import { useState, useEffect } from "react"
import { usePortfolio } from '../hooks'

export const useUserProfile = () => {

    const portfolio = usePortfolio();
    const [profile, setProfile] = useState({
        theme = 'dark', 
        baseCurrency = 'USD', 
        refreshInterval = 10, 
        portfolio
    })

    // Load user profile from local storage.
    useEffect(() => {
        const localProfile = localStorage.getItem('userProfile')
        if (localProfile) setProfile(Profile); console.log("User profile was loaded from local storage.")
    })

    // Save user profile when Profile change.
    useEffect(() => {
        localStorage.setItem('userProfile', Profile)
        console.log("User profile was saved to local storage.")
    }, [profile])


    return { 
        state: profile, 
        setTheme({ theme }){
            setProfile({...profile, theme })
        },
        setBaseCurrency({ currency }){
            setProfile({...profile, currency })
        },
        setRefreshInterval({ duration }){
            setProfile({...profile, duration })
        } 
    }
}