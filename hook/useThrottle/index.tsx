import React, {useEffect, useState} from 'react';
import useThrottleFn from '../useThrottleFn/index';

function useThrottle<T>(value: T, wait) {
    const [state, setState] = useState();
    const { run } = useThrottleFn(() => {
        setState(value);
    }, wait, [value]);

    return state;
};

export default useThrottle;
