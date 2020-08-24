import { createStore, enhancedFetch, sleep } from 'utilities'

const paths = {
    exchangeRates: 'https://api.coingecko.com/api/v3/exchange_rates',
    coins:
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=20&page=1&sparkline=false',
    news: 'https://api.coingecko.com/api/v3/ping',
    colors: 'https://api.coingecko.com/api/v3/ping',
}

export const useAPI = createStore((set) => {
    return {
        fetching: {
            isActive: true,
            percentage: 0,
        },
        initialLoad: true,
        data: {},
        fetchData: async () => {
            set((state) => {
                state.fetching = {
                    isActive: true,
                    percentage: 0,
                }
            })

            const pathCount = Object.keys(paths).length
            const fetchPercentageIncrement = 100 / pathCount

            let data = {}

            for (const name in paths) {
                data[name] = await enhancedFetch(paths[name])
                await sleep(0.1)
                set((state) => {
                    state.fetching.percentage += fetchPercentageIncrement
                })
            }

            set((state) => {
                state.fetching = {
                    isActive: false,
                    percentage: 100,
                }
            })

            set((state) => {
                state.data = data
            })
        },
    }
})

// After first load set initialLoad status to false, then unsubscribe. This variable is used
// for events which depend only on the initial loading state of the app.
const unsub = useAPI.subscribe(
    (percentage) => {
        if (percentage >= 100) {
            useAPI.setState((state) => (state.initialLoad = false))
            unsubscribe()
        }
    },
    (state) => state.fetching.percentage
)

function unsubscribe() {
    unsub()
}
