import { useState, useEffect } from 'react'

// Perform an action every specified interval.
export const useInterval = ({ action, interval : initialInterval }) => {

    const [timer, setTimer] = useState();
    const [interval, setInterval] = useState(initialInterval);
    
    const changeInterval = (value) => setInterval(value)
    const stop = () => clearInterval(timer)

    useEffect(() => {
        stop()
        const newTimer = setInterval(action, interval)
        setTimer(newTimer)
    }, [interval])

    return { changeInterval, stop }
}