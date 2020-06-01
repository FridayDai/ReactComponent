import React from 'react';
import usePrevious from './index';

function usePreviousDemo() {
    const [count, setCount] = React.useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            Count: {count}
            PreCount: {prevCount}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    );
}
export default usePreviousDemo;
