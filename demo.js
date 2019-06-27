import * as React from "react";
import * as ReactDOM from "react-dom";

import { message } from "./components";

ReactDOM.render(
    <div>
        <button onClick={() => message.error('error', 1000)}>click</button>
    </div>,
    document.getElementById("container")
);
