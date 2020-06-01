import React, {useRef, useCallback, useEffect, useState} from "react";
import useRequest from './index';

const getData = (text) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(text), 2000);
    });
};

const useRequestDemo = () => {
    const [show, setShow] = useState(false);

    return(
        <div>
            <div>
                <button
                    onClick={() => {
                        setShow(s => {
                            return !s;
                        });
                    }}
                >click to run</button>
            </div>
            {
                show && <Text />
            }
        </div>
    );
};

const Text = () => {
    console.log('render text');
    const { data, loading, run } = useRequest(getData, {
        manual: false,
        defaultParams: [Math.random().toFixed(2)],
        cacheKey: 'getData',
        initData: '--'
    });
    return (
        <div>{`${loading}:${data}`}</div>
    );
};

export default useRequestDemo;
