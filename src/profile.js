import React from "react";

import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (!this.props.bio) {
            this.setState({
                button: "Add your bio"
            });
        } else {
            this.setState({
                button: "Edit your bio"
            });
        }
    }
    done(e) {
        console.log("this is e", e);
    }
    render() {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "0.3fr 1fr",
                    background: "#d8f2c1"
                }}
            >
                <ProfilePic
                    picture={this.props.picture}
                    first={this.props.first}
                    last={this.props.last}
                    onClick={this.props.onClick}
                />

                <div
                    style={{
                        placeSelf: "center / start",
                        gridColumn: 2 / 3
                    }}
                >
                    <h2 style={{ padding: 0 }}>
                        {this.props.first} {this.props.last}
                    </h2>
                    <div>{this.props.bio}</div>
                    <BioEditor
                        button={this.state.button}
                        done={this.props.done}
                    />
                </div>
            </div>
        );
    }
}
