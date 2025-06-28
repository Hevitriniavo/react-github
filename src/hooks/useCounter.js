function useCounter({ start = 0, by = 1 } = {}) {
    const [value, setValue] = useCounter(start)
    
    return {
        incr: () => setValue(p => p + by),
        decr: () => setValue(p => p - by),
        reset: () => setValue(start),
        value,
        setValue
    }
}

export default useCounter