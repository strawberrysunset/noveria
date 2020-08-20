import { createZustandStore } from 'utilities'

export const usePortfolio = createZustandStore(set => ({
    accounts: [],
    activeAccount : 'name',
    addAccount: () => set((state) => {
        const account = { name, assets : [], total : 0 }
        state.accounts.push(account)
    }),
    removeAccount: targetID => set((state) => {
        state.accounts = state.accounts.filter(({ id }) => id !== targetID)
    }),
    renameAccount : newName => set((state) => {
        state.accounts = state.accounts.map(account => {
            if (account.name === input.name ){
                account.name = newName
                return account
            }
        }) 
    }),
    setActiveAccount: targetID => set((state) => {
        state.activeAccount = state.accounts.filter(({id}) => id === targetID);
    }),
    addAsset : ({ account, coin, amount }) => set((state) => {
        const asset = { coin, amount }
        state.accounts[account].push(asset)
    }),
    removeAsset : ({ account, coin, amount }) => set((state) => {
        const asset = { coin, amount }
        state.accounts[account].push(asset)
    }),
    clearAccount : ({ account }) => set((state) => {
        state.accounts[account] = []
    }),
    clearPortfolio : () => set((state) => {
        state.accounts = []
    })
}))


