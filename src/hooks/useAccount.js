import { useState, useEffect } from 'react'
import { useIDGenerator } from '../hooks'

export const useAccount = ({ name }) => {

    const [assets, setAssets] = useState([])
    const [name, setName] = useState(name)

    const methods = {
        addAsset(asset) {
            setAccount([...account, asset])
        },
        removeAsset(targetAssetID) { 
            const filtered = account.currentAccount.filter(({ ID }) => ID !== targetAssetID)
            setAccount(filtered)
        },
        clearAllAssets() {
            setAssets([])
        },
        changeName({ name }){
            setName(name)
        }
    }

    const total = assets.reduce((asset, total) => total += asset.value, 0).toFixed(2)

    return { 
        ID,
        name, 
        assets, 
        total,
        ...methods
    }
}
