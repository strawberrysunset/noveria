import { useState, useEffect } from 'react'

export const usePortfolio = () => {

    const [accounts, setAccounts] = useState([])
    const [currentAccount, setCurrentAccount] = useState('MyAccount')

    const numberOfAccounts = accounts.length;
    const total = accounts.reduce((account, total) => total += account.total).toFixed(2);
    
    useEffect(() => {
        setPortfolio({
            accounts : [ createAccount({ name: 'default'}) ], 
            currentAccount : 'MyAccount',
           
        })
    }, [])

    const methods = {
        addAccount(name){
            setAccounts({...accounts, createAccount({ name })})
        },

        removeAccount(targetAccountID){
            const filtered = accounts.filter(({ id }) => id !== targetAccountID);
            setAccounts(filtered);
        },
        setCurrentAccount
    }
    
    return { 
        accounts, 
        currentAccount, 
        numberOfAccounts, 
        total, 
        ...methods
    };
}
