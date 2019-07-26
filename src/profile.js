import React from "react";

import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

export default function Profile(props) {
    return (
        <div style={{ background: "#d8f2c1" }}>
            <ProfilePic size="jumbo" profilePic={props.profilePic} />
            <div>{props.first}</div>
            <BioEditor bio={props.bio} done={props.changeBio} />
        </div>
    );
}
