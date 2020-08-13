import { useState, useEffect } from 'react'
import { jsonFetch } from '../utils'

export const useCoins = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coins, setCoins] = useState({});

    useEffect(() => { fetchCoins() }, []);

    const fetchCoins = async () => {
        const coins = await jsonFetch('');
        setCoins(coins);
        setIsLoading(false);
    }

    return { 
        value : coins, 
        isLoading,
        refresh : fetchCoins
    }
}

export const test = () => {
    
}