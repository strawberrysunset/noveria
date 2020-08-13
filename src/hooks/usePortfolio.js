import { useState } from 'react'

export const usePortfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    return { 

        // State values.
        state : portfolio, 
        count : portfolio.length,
        total : portfolio.reduce((asset, total) => total += asset.value, 0).toFixed(2),

        // State mutation methods.
        addAsset(asset) {
            setPortfolio([...portfolio, asset])
        },
        removeAsset (targetId) { 
            const filtered = portfolio.filter(({ Id }) => Id !== targetId);
            setPortfolio(filtered);
        },
        clearAll() {
            setPortfolio([])
        }
    }
}

export const test = () => {
    
}