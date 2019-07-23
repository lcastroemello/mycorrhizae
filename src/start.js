import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import Registration from "./Registration";

// let elem;
// if (location.pathname == '/welcome') {
// //they are logged out
// elem = <Welcome />;
// } else {
// //they are logged in
// elem = <img src="/logo.png" />;
// }

ReactDOM.render(<Welcome />, document.querySelector("main"));
