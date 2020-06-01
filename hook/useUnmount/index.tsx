import React, { useEffect, useRef } from 'react';

function useUnmount(fn) {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    useEffect(() => {
        return () => {
            if(fnRef.current && typeof fnRef.current === 'function') {
                fnRef.current();
            }
        }
    }, []);
}

export default useUnmount;
