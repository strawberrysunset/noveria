import { createStore, generateUniqueID } from 'utilities'

export const createAccount = (props, set, name) => ({
    name,
    assets: new Map(),
    ...props,
    addAsset: (coin, amount) => {
        const id = generateUniqueID()
        const childSet = (fn) =>
            set((state) => {
                fn(state.assets.get(id))
            })
        const remove = () =>
            set((state) => {
                state.assets.delete(id)
            })
        const newAsset = createAsset({ remove }, childSet, coin, amount)
        set((state) => {
            state.assets.set(id, newAsset)
        })
    },
    setName: (name) =>
        set((state) => {
            state.name = name
        }),
})

export const createAsset = (props, set, coin, amount) => ({
    ...props,
    coin,
    amount,
    setCoin: (coin) =>
        set((state) => {
            state.coin = coin
        }),
    setAmount: (amount) =>
        set((state) => {
            state.amount = amount
        }),
})

export const usePortfolio = createStore((set, get) => ({
    accounts: new Map(),
    addAccount: (name) => {
        const id = generateUniqueID()
        // Set method passed to child passes the Account itself as state.
        const childSet = (fn) => {
            set((state) => {
                fn(state.accounts.get(id))
            })
        }
        const remove = () => {
            set((state) => {
                state.accounts.delete(id)
            })
        }
        const newAccount = createAccount({ remove }, childSet, name)
        set((state) => {
            state.accounts.set(id, newAccount)
        })
    },
    getAccounts: () => Array.from(get().accounts.values()),
}))
