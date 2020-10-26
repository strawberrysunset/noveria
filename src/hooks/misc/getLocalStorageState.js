import { parseToHsl } from "polished"

export const getLocalStorageState = ({key, fallback}) => {
    const localState = localStorage.getItem(key)
    if (localState) {
      try {
        const parsedLocalState = JSON.parse(localState)
        return parsedLocalState
      } catch (err){
        return fallback
      }
    }
    return fallback
}