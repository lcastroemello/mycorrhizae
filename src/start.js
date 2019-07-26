import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import App from "./app";

let elem;
if (location.pathname == "/welcome") {
    //they are logged out
    elem = <Welcome />;
} else {
    //they are logged in
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
