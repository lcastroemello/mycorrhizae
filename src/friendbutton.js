import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function FriendButton() {
    // const [button, setButton] = useState();
    // const [userId, setUserId] = useState();
    // const [broId, setBroId] = useState();
    useEffect(() => {
        console.log("gets mounted");
        (async () => {
            const firstButton = await axios.get("/getbutton");
            console.log("testing first button", firstButton);
        })();
    }, []);
    function submit() {
        console.log("friendEvent works");
    }
    return (
        <button
            onClick={submit}
            style={{ fontSize: "1rem", background: "#67912D" }}
        >
            So far it appears
        </button>
    );
}
