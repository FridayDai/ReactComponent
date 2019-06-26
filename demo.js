import * as React from "react";
import * as ReactDOM from "react-dom";

import { message } from "./components/index";

ReactDOM.render(
    <div>
        {message()}
    </div>,
    document.getElementById("container")
);
