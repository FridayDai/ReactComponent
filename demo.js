import * as React from "react";
import * as ReactDOM from "react-dom";

import { message } from "./components/index";

ReactDOM.render(
    <div>
        <button onClick={() => {
            message.error('error', 3);
            // message.success('error', 4);
            // message.info('error', 5);
            // message.warn('error', 6);
        }}>click</button>
    </div>,
    document.getElementById("container")
);
