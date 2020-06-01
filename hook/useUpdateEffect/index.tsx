import React, { useRef, useEffect } from 'react';

const useUpdateEffect: typeof useEffect = (fn, dep) => {
    const ref = useRef(false);

    useEffect(() => {
        if(!ref.current) {
            ref.current = true;
        } else {
            return fn();
        }
    }, dep);
};

export default useUpdateEffect;
