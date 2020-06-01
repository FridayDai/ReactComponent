import React, { useEffect } from 'react';

function useMount(fn) {
    useEffect(() => {
        fn();
    }, []);
}

export default useMount;
