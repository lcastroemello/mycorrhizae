import { groupMessages, newGroupMessage } from "./actions";
import * as io from "socket.io-client";

export let socket;
// socket.on("hi", function(data) {
//     console.log("test for socket", data);
// });

export const init = store => {
    if (!socket) {
        socket = io("/groupchat").connect();

        socket.on("hi", function(data) {
            console.log("test for inside store thingy socket", data);
        });
        socket.on("groupMessages", msgs => {
            store.dispatch(groupMessages(msgs));
            console.log("socket 2 on get messages works");
        });

        socket.on("newGroupMessage", msg => {
            console.log("socket 2 on post message works");
            store.dispatch(newGroupMessage(msg));
        });
    }
};
