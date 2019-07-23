import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import Registration from "./Registration";
import Logo from "./Logo";

let elem;
if (location.pathname == "/welcome") {
    //they are logged out
    elem = <Welcome />;
} else {
    //they are logged in
    elem = <Logo />;
}

//now that I did that, the / route directs me to Logo, regardless of cookies. How to fix it???

ReactDOM.render(elem, document.querySelector("main"));
