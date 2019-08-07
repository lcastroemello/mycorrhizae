import { groupMessages, newGroupMessage } from "./actions";
import * as io from "socket.io-client";

export let socket = io("/groupChat");

export const init = store => {
    if (!socket) {
        socket = io.connect();
        socket.on("groupMessages", msgs => store.dispatch(groupMessages(msgs)));

        socket.on("newGroupMessage", msg =>
            store.dispatch(newGroupMessage(msg))
        );
    }
};
