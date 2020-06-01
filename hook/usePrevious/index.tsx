import React, {useRef} from 'react';

function usePrevious(state) {
    const prev = useRef();
    const cur = useRef();

    prev.current = cur.current;
    cur.current = state;

    return prev.current;
}

export default usePrevious;
