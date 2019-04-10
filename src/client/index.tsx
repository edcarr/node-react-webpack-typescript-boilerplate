import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider>
        <Router history={history}>
            <div>HELLO WORLD lolololol</div>
        </Router>
    </Provider>,
    document.getElementById("root")
);
