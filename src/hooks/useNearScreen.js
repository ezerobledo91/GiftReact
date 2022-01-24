import { useState, useEffect, useRef } from "react"

export function useNearScreen() {
    const [isIntersected, setShow] = useState(false)
    const elementRef = useRef()
    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px',
        })

        const elementoAObservar = elementRef.current
        observer.observe(elementoAObservar)
        return () => observer.disconnect()
    })
    return { elementRef, isIntersected }
}