import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function FindBros() {
    const [users, setUsers] = useState();
    const [val, setVal] = useState();

    useEffect(() => {
        (async () => {
            const userList = await axios.get("/users.json");
            setUsers(userList.data);
        })();
    }, []);
    return (
        <div>
            <h1>FIND BUDDY BRANCHES</h1>
            <h2>Checkout our new sprouts!</h2>
            <div>
                {users &&
                    users.map(users => {
                        return (
                            <div
                                key={users.id}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "5rem 1fr"
                                }}
                            >
                                <Link to={`/user/${users.id}`}>
                                    <img
                                        style={{
                                            gridColumn: 1 / 2,
                                            height: 5 + "rem",
                                            width: 3.8 + "rem"
                                        }}
                                        src={users.picture}
                                        alt={`${users.first} ${users.last}`}
                                    />
                                </Link>
                                <h3 style={{ gridColumn: 2 / 3 }}>
                                    {users.first} {users.last}
                                </h3>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
