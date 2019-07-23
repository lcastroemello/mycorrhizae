import React from "react";

export default function Logo() {
    return (
        <div style={{ display: "flex", justifySelf: "flex-start" }}>
            <img
                style={{ height: 5 + "rem", width: 5 + "rem" }}
                src="rootsLogo.png"
            />
        </div>
    );
}
