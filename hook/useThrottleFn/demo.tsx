import React, { useState } from 'react';
import useThrottleFn from './index';

const useThrottleFnDemo = () => {
    const [value, setValue] = useState('');
    const [throttleValue, setThrottleValue] = useState('');
    const { run } = useThrottleFn(() => {
        setThrottleValue(value);
    }, 1000, [value]);

    return (
        <div>
            <div>{value}</div>
            <div>{throttleValue}</div>
            <input type='text' onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

export default useThrottleFnDemo;
