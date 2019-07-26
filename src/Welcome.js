import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Registration from "./registration";
import Login from "./login";

export default function Welcome() {
    return (
        <HashRouter>
            <div
                style={{
                    display: "static",
                    justifySelf: "center",
                    background: "#F5FBEF"
                }}
            >
                <img
                    style={{ height: 20 + "rem", width: 20 + "rem" }}
                    src="rootsLogo.png"
                />
                <h1 style={{ color: "#67912D" }}>Welcome to Mycorrhizae!</h1>
                <h2>Be a root of change! Learn, plant, eat, enjoy!</h2>
                <p>
                    Become a part of the fastest growing online community in
                    urban agriculture and gardening
                </p>
                <Route exact path="/" component={Registration} />
                <Route path="/login" component={Login} />
            </div>
        </HashRouter>
    );
}
