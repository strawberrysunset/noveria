export const getLocalState = ({key, fallback, initializer}) => {
    const localState = localStorage.getItem(key)
    if (localState) {
        const localStateParsed = JSON.parse(localState)
        if (initializer) {
            return initializer(localStateParsed)
        }
        return localStateParsed
    }
    return fallback
}