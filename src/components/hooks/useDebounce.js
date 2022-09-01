import { useRef } from "react"
import { useCallback } from "react"

export default function useDebounce(callback, delay){
    const timer = useRef()
    const debouncedCallback = useCallback((...args) => {
        if(timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(()=> {
            callback(...args)
            console.log("Debounce hook")
        }, delay)
    }, [callback, delay])

    

    return debouncedCallback
}