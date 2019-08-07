export default function(state = {}, action) {
    if (action.type == "RECEIVE_FRIENDS") {
        state = {
            ...state,
            users: action.users
        };
    }
    if (action.type == "ACCEPT_REQUEST") {
        state = {
            ...state,
            users: state.users.map(user => {
                if (user.id != action.id) {
                    return user;
                }
                return {
                    ...user,
                    accepted: true
                };
            })
        };
    }
    if (action.type == "END_FRIENDSHIP") {
        state = {
            ...state,
            users: state.users.map(user => {
                if (user.id != action.id) {
                    return user;
                }
                return {
                    user: null
                };
            })
        };
    }

    if (action.type == "GET_CHAT_MESSAGES") {
        state = {
            ...state,
            chatMessages: action.msgs.reverse()
        };
    }

    if (action.type == "POST_NEW_CHAT_MESSAGE") {
        console.log("inside action");
        state = {
            ...state,
            chatMessages: [...state.chatMessages, action.msg]
        };
    }

    return state;
}
