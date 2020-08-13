import { useState, useEffect } from 'react'
import { jsonFetch } from '../utils'

export const useExchangeRates = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [exchangeRates, setExchangeRates] = useState({})

    useEffect(() => { fetchExchangeRates() }, [])

    const fetchExchangeRates = async () => {
        const rates = await jsonFetch('')
        setExchangeRates(rates)
        setIsLoading(false)
    }

    return { 
        value : exchangeRates, 
        isLoading,
        refresh : fetchExchangeRates
    }
}

export const test = () => {
    
}