import React from "react";
import axios from "./axios";

import Uploader from "./uploader";
import ProfilePic from "./profilepic";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaderIsVisible: false
        };
    } //end of constructor
    async componentDidMount() {
        const { data } = await axios.get("/user");
        console.log("this is data", data);
        this.setState(data);
        console.log("this is state after get", this.state);
    }
    render() {
        if (!this.state.id) {
            return <img src="growing.gif" />;
        }
        return (
            <div>
                <div className="header" style={{ display: "flex" }}>
                    <img
                        style={{
                            height: 5 + "rem",
                            width: 5 + "rem",
                            justifySelf: "flex-start"
                        }}
                        src="rootsLogo.png"
                        alt="roots logo"
                    />

                    <ProfilePic
                        picture={this.state.picture}
                        first={this.state.first}
                        last={this.state.last}
                        onClick={() =>
                            this.setState({ uploaderIsVisible: true })
                        }
                    />
                </div>
                {this.state.uploaderIsVisible && (
                    <Uploader
                        done={picture =>
                            this.setState({ picture, uploaderIsVisible: false })
                        }
                    />
                )}
            </div>
        );
    } //end of render
} //end of class
