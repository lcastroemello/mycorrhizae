import React from "react";

import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("profile appears", this.props);
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
    render() {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "0.3fr 1fr",
                    background: "#d8f2c1"
                }}
            >
                <img
                    style={{
                        height: "20rem",
                        width: "15rem",
                        placeSelf: "center / start",
                        gridColumn: 1 / 2,
                        padding: "3rem"
                    }}
                    src={this.props.picture}
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
                        bio={bio => this.setState({ bio })}
                        done={bio => this.alterBio({ bio })}
                    />
                </div>
            </div>
        );
    }
}
