import { createAccount } from './createAccount'

export const createPortfolio = () => ({
    accounts = [],
    addAccount({ name }){
        let account = createAccount({ name });
        this.accounts = [...this.accounts, account]
    },
    removeAccount({ targetId }){
        this.accounts = this.accounts.filter(({ id })=> id !== targetId)
    },
    clearAllAccounts(){
        this.accounts = []
    },
})


