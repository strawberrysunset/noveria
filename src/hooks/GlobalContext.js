import React, { createContext } from 'react' 
import { useCoins, useExchangeRates, usePortfolio } from '.'

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    
    const coins = useCoins();
    const exchangeRates = useExchangeRates();
    const portfolio = usePortfolio();

    const api = {
        coins,
        exchangeRates,
        refresh : () => {
            coins.refresh();
            exchangeRates.refresh();
        }
    }

    return (    
        <GlobalContext.Provider value={{ portfolio, api }}>
            { children }
        </GlobalContext.Provider>
    )
}
