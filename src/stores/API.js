import { createZustandStore, enhancedFetch } from 'utilities'

export const useAPI = createZustandStore(set => ({
    api : {
        exchangeRates: [],
        coins : [],
        colors : [],
        news: []
    },
    loading : true,
    refresh : async () => {
        set((state) => { state.loading = true })
        const data = await fetchData();
        set((state) => {
            state.api = data;
            state.loading = false
        })
    }
}))


async function fetchData () {
    return {
        exchangeRates : await enhancedFetch('https://api.coingecko.com/api/v3/exchange_rates', ['rates']),
        coins : await enhancedFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=20&page=1&sparkline=false'),
        // colors : await enhancedFetch('https://www.coinpalette.com/colors?coins=bitcoin'),
        news : await enhancedFetch('https://api.coingecko.com/api/v3/ping')
    } 
}
