import React from "react";
import Registration from "./Registration";

export default function Welcome() {
    return (
        <div style={{ display: "static", justifySelf: "center" }}>
            <img
                style={{ height: 20 + "rem", width: 20 + "rem" }}
                src="rootsLogo.png"
            />
            <h1>Welcome to Mycorrhizae!</h1>
            <h2>Be a root of change! Learn, plant, eat, enjoy!</h2>
            <p>
                Become a part of the fastest growing online community and
                exchange experiences in urban agriculture and gardening
            </p>
            <Registration />
        </div>
    );
}
