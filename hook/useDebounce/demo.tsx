import React, { useState } from 'react';
import useDebounce from './index';

export default () => {
    const [value, setValue] = useState();
    const debouncedValue = useDebounce(value, 500);

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Typed value"
                style={{ width: 280 }}
            />
            <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
        </div>
);
};
