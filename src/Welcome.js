import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Registration from "./registration";
import Login from "./login";

export default function Welcome() {
    return (
        <HashRouter>
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    gridTemplateColumns: "1fr 1fr",
                    justifySelf: "center",
                    background: "#f5fcef",
                    margin: 0,
                    height: "100vh",
                    width: "100vw",
                    boxSizing: "border-box",
                    backgroundImage: 'url("rootsLogo.png")',
                    backgroundSize: "cover"
                }}
            >
                <div
                    style={{
                        gridRow: "1/2",
                        gridColumn: "2/3",
                        paddingRight: "3rem"
                    }}
                >
                    <h1
                        style={{
                            color: "#67912d",
                            fontFamily: "Lacquer, sans-serif",
                            fontSize: "4rem",
                            display: "grid",
                            justifyItems: "right"
                        }}
                    >
                        Welcome to <br /> Mycorrhizae!
                    </h1>
                    <h2
                        style={{
                            color: "#334431",
                            fontFamily: "Lacquer, sans-serif",
                            fontSize: "1.3rem",
                            display: "grid",
                            justifyItems: "right"
                        }}
                    >
                        Be a root of change! <br /> Learn, plant, eat, enjoy!
                    </h2>
                </div>
                <div
                    style={{
                        gridRow: "2/3",
                        gridColumn: "1/2",
                        width: "18rem",
                        display: "grid",
                        justifySelf: "center",
                        alignSelf: "center",
                        justifyItems: "center",
                        background: "#67912d"
                    }}
                >
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </div>
        </HashRouter>
    );
}
