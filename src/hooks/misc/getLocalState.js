export const getLocalState = ({key, fallback}) => {
    const localState = localStorage.getItem(key)
    if (localState) {
        const localStateParsed = JSON.parse(localState)
        return localStateParsed
    }
    return fallback
}