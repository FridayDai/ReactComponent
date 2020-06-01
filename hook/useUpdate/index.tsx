import React, { useCallback, useState } from 'react';

function useUpdate() {
    const [, setState] = useState();

    const forceUpdate = useCallback(() => setState(num => num + 1), []);

    return forceUpdate;
}

export default useUpdate;
