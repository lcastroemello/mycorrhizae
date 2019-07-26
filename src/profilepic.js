import React from "react";

export default function({ picture, first, last, onClick }) {
    return (
        <img
            style={{
                justifySelf: "flex-end",
                height: 5 + "rem",
                width: 5 + "rem",
                border: "#67912D" + " solid " + 30 + "pix"
            }}
            src={picture}
            alt={`${first} ${last}`}
            onClick={onClick}
        />
    );
}
