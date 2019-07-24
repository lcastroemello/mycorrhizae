import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
// import Registration from "./Registration";
import Logo from "./Logo";

let elem;
if (location.pathname == "/") {
    //they are logged out
    elem = <Welcome />;
} else {
    //they are logged in
    elem = <Logo />;
}

ReactDOM.render(elem, document.querySelector("main"));
