import { useState, useEffect } from 'react'
import { jsonFetch } from '../utils'

export const useNewsFeed = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [newsFeed, setNewsFeed] = useState({});

    useEffect(() => { fetchCoins() }, []);

    const fetchNewsFeed = async () => {
        const news = await jsonFetch('');
        setNewsFeed(news);
        setIsLoading(false);
    }

    return { 
        value : newsFeed, 
        isLoading,
        refresh : fetchNewsFeed
    }
}

export const test = () => {
    
}