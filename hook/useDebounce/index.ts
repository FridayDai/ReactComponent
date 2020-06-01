import React, { useState } from 'react';
import useDebounceFn from '../useDebounceFn';

function useDebounce<T>(value: T, delay: number) {
    const [res, setRes] = useState(value);

    useDebounceFn(() => {
        setRes(value);
    }, delay, [value]);

    return res;
}

export default useDebounce;
