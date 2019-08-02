import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveFriends, acceptRequest, endFriendship } from "./actions";

export default function Friends() {
    const dispatch = useDispatch();
    const friends = useSelector(
        state =>
            state.users && state.users.filter(user => user.accepted == true)
    );
    const wannabes = useSelector(
        state =>
            state.users && state.users.filter(user => user.accepted == false)
    );

    useEffect(() => {
        dispatch(receiveFriends());
    }, []);

    console.log("testing friends", friends);
    console.log("testing wannabes", wannabes);
    return (
        <div>
            <div
                className="wannabes"
                style={{ borderBottom: "solid 2px black" }}
            >
                <h1>Check who wants to be a branch in your tree!</h1>
                {wannabes &&
                    wannabes.map(wannabes => {
                        return (
                            <div key={wannabes.id}>
                                <img src={wannabes.picture} />
                                <h3>
                                    {wannabes.first} {wannabes.last}
                                </h3>
                                <p
                                    onClick={e =>
                                        dispatch(acceptRequest(wannabes.id))
                                    }
                                >
                                    Add this branch to your tree!
                                </p>
                            </div>
                        );
                    })}
            </div>
            <div className="friends">
                <h1>Branches in your friend tree!</h1>
                {friends &&
                    friends.map(friends => {
                        return (
                            <div key={friends.id}>
                                <img src={friends.picture} />
                                <h3>
                                    {friends.first} {friends.last}
                                </h3>
                                <p
                                    onClick={e =>
                                        dispatch(endFriendship(friends.id))
                                    }
                                >
                                    Prune this branch from your tree
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
