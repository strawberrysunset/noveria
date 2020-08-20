import { createZustandStore } from 'utilities'

export const useUser = createZustandStore(set => ({
    user : {
        baseCurrency: 'USD',
        refreshRate : 10,
        theme : 'dark',
        currentAccount : ''
    },
    setBaseCurrency: ({ currency }) => set(({ user }) => {
        user.baseCurrency = currency;
    }),
    setRefreshRate: input => set(({ user }) => {
        user.refreshRate = input.refreshRate
    }),
    setTheme: input => set(({ user }) => {
        user.theme = input.theme;
    }),
    loadFromLocalStorage : () => set((state) => {
        state.user = localStorage.getItem('user');
    }),
    saveToLocalStorage: () => set((state) => {
        localStorage.setItem('user', state.user);
    })
}))

