import { createStore } from 'utilities'

export const useMenu = createStore((set) => ({
    showing: false,
    toggle: () => {
        set((state) => {
            state.showing = !state.showing
        })
    },
}))
