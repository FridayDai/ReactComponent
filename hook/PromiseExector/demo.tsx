import React from 'react';
import PromiseExector from './index';

let count = 0;
const request = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 3000;
        console.log('delay: ', delay);
        setTimeout(() => resolve(`delay: ${delay}, count: ${++count}`), delay);
    });
};

const instance = new PromiseExector();
const fn = instance.throttle(1000, request);
instance.each(res => console.log(res));

const Demo = () => {
    return (
        <div>
            <div>{`count: ${count}`}</div>
            <button onClick={() => {
                fn(1).then(res => console.log(res));
            }}>click to try</button>
        </div>
    );
};

export default Demo;
