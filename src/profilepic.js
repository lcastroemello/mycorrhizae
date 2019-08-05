import React from "react";

export default function({ picture, first, last, onClick }) {
    return (
        <img
            style={{
                objectFit: "cover",
                alignSelf: "center",
                height: 8 + "rem",
                width: 8 + "rem"
            }}
            src={picture}
            alt={`${first} ${last}`}
            onClick={onClick}
        />
    );
}
