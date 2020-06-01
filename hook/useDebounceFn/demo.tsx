import React, {useEffect, useRef, useState} from 'react';
import useDebounceFn from './index';

function useDebounceFnDemo() {
    const [count, setCount] = useState(0);
    const {run} = useDebounceFn(() => {
        setCount(p => p + 1)
    }, 500, []);

    return (
        <div>
            {count}
            <div>
                <button onClick={run}>click to add</button>
            </div>
        </div>
    );
    //...
}
export default useDebounceFnDemo;
