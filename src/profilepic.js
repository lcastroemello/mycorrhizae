import React from "react";

export default function({ picture, first, last, onClick }) {
    return (
        <img
            style={{
                objectFit: "cover",
                alignSelf: "center",
                justifySelf: "right",
                width: "5rem",
                height: "5rem"
            }}
            id="images"
            src={picture}
            alt={`${first} ${last}`}
            onClick={onClick}
        />
    );
}
