import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function FindBros() {
    const [users, setUsers] = useState();

    useEffect(() => {
        (async () => {
            const userList = await axios.get("/users.json");
            console.log("testing axios findpeople", userList.data);
            setUsers(userList.data);
        })();
    }, []);
    console.log("testing users", users);
    return (
        <div>
            <h1>FIND BUDDY BRANCHES</h1>
            <h2>Checkout our new sprouts!</h2>
            <div>
                {users &&
                    users.map(users => {
                        return (
                            <div key={users.id}>
                                <img
                                    src={users.picture}
                                    alt={`${users.first} ${users.last}`}
                                />
                                <h3>
                                    {users.first} {users.last}
                                </h3>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
