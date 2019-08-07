import React, { useEffect, useRef } from "react";
import { socket } from "./socket";
import { useSelector } from "react-redux";

export default function Chat() {
    const chatMessages = useSelector(state => state && state.chatMessages);
    console.log(chatMessages);
    const keyCheck = e => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("enter was pressed", e.target.value);
            socket.emit("newChatMessage", e.target.value);
            e.target.value = "";
        }
    };

    return (
        <div>
            <h1>Chat Room</h1>
            <div
                className="chat-container"
                style={{ background: "white", paddingLeft: "2rem" }}
            >
                {chatMessages &&
                    chatMessages.map(chatMessages => {
                        return (
                            <div key={chatMessages.id}>
                                <img
                                    style={{ height: "20px", width: "20px" }}
                                    src={chatMessages.picture}
                                />
                                <p>
                                    {chatMessages.first} {chatMessages.last}
                                </p>
                                <p> {chatMessages.message}</p>
                                <p> {chatMessages.created_at}</p>
                            </div>
                        );
                    })}
            </div>
            <textarea
                onKeyDown={keyCheck}
                placeholder="Add your message here"
            />
        </div>
    );
}
