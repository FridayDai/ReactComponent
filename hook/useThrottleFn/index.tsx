import React, {useCallback, useRef, useEffect} from 'react';
import useUpdateEffect from "../useUpdateEffect";

const useThrottleFn = <T extends any[]>(fn: (...args: T) => any, wait: number, deps: T) => {
    const timer = useRef<any>();
    const fnRef = useRef<any>(fn);
    fnRef.current = fn;
    // const currentArgs = useRef<any>();

    const cancel = useCallback(() => {
        if(timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = undefined;
    }, []);

    const run = useCallback((...args: any) => {
        // currentArgs.current = args;
        if(!timer.current) {
            timer.current = setTimeout(() => {
                fnRef.current(...args);
                timer.current = undefined;
            }, wait);
        }
    }, [wait, cancel]);

    useUpdateEffect(() => {
        run();
    }, [...deps, run]);

    useEffect(() => cancel, []);

    return {
        run,
        cancel
    }
};

export default useThrottleFn;
