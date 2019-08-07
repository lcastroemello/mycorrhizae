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

    //Making our chat always start on the end of the scrow (newer messages)
    const elemRef = useRef();
    useEffect(() => {
        elemRef.current.scrollTop =
            elemRef.current.scrollHeight - elemRef.current.clientHeight;
    }, []);

    return (
        <div
            style={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                padding: "2rem"
            }}
        >
            <h1>Talk with all the branches in our tree!</h1>
            <div
                className="chat-container"
                ref={elemRef}
                style={{
                    background: "#f5fcef",
                    overflowY: "scroll",
                    width: "30rem",
                    height: "30rem",
                    padding: "1rem"
                }}
            >
                {chatMessages &&
                    chatMessages.map(chatMessages => {
                        return (
                            <div
                                key={chatMessages.id}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "5rem 1fr",
                                    gridTemplateRows: "0.2fr 1fr 0.1fr",
                                    borderBottom: "solid black 0.5px"
                                }}
                            >
                                <img
                                    style={{
                                        height: "4rem",
                                        width: "4rem",
                                        gridRow: "1/4",
                                        gridColumn: "1/2",
                                        alignSelf: "center",
                                        objectFit: "cover"
                                    }}
                                    src={chatMessages.picture}
                                />
                                <p
                                    style={{
                                        gridRow: "1/2",
                                        gridColumn: "2/3",
                                        fontWeight: "900",
                                        fontSize: "1.1rem"
                                    }}
                                >
                                    {chatMessages.first} {chatMessages.last}
                                </p>
                                <p
                                    style={{
                                        gridRow: "2/2",
                                        gridColumn: "2/3",
                                        fontSize: "1rem"
                                    }}
                                >
                                    {chatMessages.message}
                                </p>
                                <p
                                    style={{
                                        gridRow: "3/4",
                                        gridColumn: "2/3",
                                        fontSize: "0.8rem"
                                    }}
                                >
                                    {chatMessages.created_at}
                                </p>
                            </div>
                        );
                    })}
            </div>
            <br />
            <br />
            <textarea
                style={{
                    width: "30rem",
                    height: "5rem",
                    background: "#d8f2c1",
                    padding: "2rem"
                }}
                onKeyDown={keyCheck}
                placeholder="Add your message here"
            />
        </div>
    );
}
