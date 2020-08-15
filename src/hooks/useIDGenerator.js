import { useState } from 'react'

export const useIDGenerator = () => {

    const [id, setId] = useState(0),

    function generateID () {
        const currentId = id
        setId(currentId++)
        return currentId;
    }

    return [ id ]
}