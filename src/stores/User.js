import { createStore } from 'utilities'

export const createUser = () => {
    return createStore((set) => ({
        baseCurrency: 'USD',
        refreshRate: 10,
        theme: 'dark',
        setBaseCurrency: (currency) =>
            set((state) => (state.currency = currency)),
        setRefreshRate: (rate) => set((state) => (state.rate = rate)),
        setTheme: (theme) => set((state) => (state.theme = theme)),
    }))
}
