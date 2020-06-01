import React, {useCallback, useEffect, useRef} from 'react';
import useUpdateEffect from '../useUpdateEffect/index';
type Timer = number | null;

type ReturnValue<T extends any[]> = {
    run: (...args: T) => void,
    cancel: () => void
}

function useDebounceFn<T extends any[]>(fn: (...args: T) => void, delay: number, dep: any): ReturnValue<T> {
    let timer = useRef<any>();
    const fnRef = useRef<any>(fn);
    fnRef.current = fn;

    const cancel = useCallback(() => {
        if(timer.current) {
            clearTimeout(timer.current);
        }
    }, []);

    const run = useCallback((...args) => {
        console.log('do run');
        cancel();

        timer.current = window.setTimeout(() => {
            fnRef.current(...args);
        }, delay);
    }, [delay, cancel]);

    useUpdateEffect(() => {
        run();
        return cancel;
    }, [...dep, run]);

    useEffect(() => cancel, []);

    return {
        run,
        cancel
    };
}

export default useDebounceFn;
