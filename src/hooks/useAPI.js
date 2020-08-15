import { useState, useEffect } from 'react'


export const useAPI = () => {

    const [api, setAPI] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => { fetchAPIData() }, [])

    async function fetchAPIData () {
        setAPI({
            exchangeRates : await jsonFetch(''),
            newsFeed = await jsonFetch(''),
            coins = await jsonFetch('')
        });
        setIsLoading(false)
        
    }

    return { 
        ...api,
        isLoading,
        refresh : fetchAPIData
    }
}
