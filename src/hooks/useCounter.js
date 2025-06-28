import { useState } from 'react';

function useCounter({ start = 0, by = 1 } = {}) {
    const [value, setValue] = useState(start);

    const incr = () => setValue(p => p + by);
    const decr = () => setValue(p => p - by);
    const reset = () => setValue(start);

    return { value, setValue, incr, decr, reset };
}

export default useCounter;
