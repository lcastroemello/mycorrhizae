import React from "react";

export default function({ picture, first, last, onClick }) {
    return (
        <img
            style={{
                gridColumn: 3 / 4,
                placeSelf: "end",
                height: 5 + "rem",
                width: 3.8 + "rem",
                border: "#67912D" + " solid " + 30 + "pix"
            }}
            src={picture}
            alt={`${first} ${last}`}
            onClick={onClick}
        />
    );
}
