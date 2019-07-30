import React from "react";

import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

export default function Profile(props) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "0.3fr 1fr",
                background: "#d8f2c1"
            }}
        >
            <div style={{ gridColumn: 1 / 2 }}>{props.profilePic}</div>
            <div
                style={{
                    placeSelf: "center / start",
                    gridColumn: 2 / 3
                }}
            >
                <h2 style={{ padding: 0 }}>
                    {props.first} {props.last}
                </h2>
                {props.bioEditor}
            </div>
        </div>
    );
}
