import axios from "axios";

export async function receiveFriends() {
    console.log("actions");
    const { data } = await axios.get("/friends.json");
    console.log("testing data action", data);
    return {
        type: "RECEIVE_FRIENDS",
        users: data.rows
    };
}
