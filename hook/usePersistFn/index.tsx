import React, { useCallback, useRef } from 'react';

type Fn = (...args: any[]) => any

function usePersistFn<T extends Fn>(fn: T) {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    return useCallback((...args) => {
        fnRef.current(...args);
    }, [fnRef]);
}

export default usePersistFn;
