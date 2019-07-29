import React from "react";
import axios from "./axios";
import { Route, BrowserRouter, Link } from "react-router-dom";

import Uploader from "./uploader";
import ProfilePic from "./profilepic";
import Profile from "./profile";
import BioEditor from "./bioeditor";
import Brofile from "./brofile";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaderIsVisible: false,
            bio: ""
        };
    } //end of constructor
    async componentDidMount() {
        const { data } = await axios.get("/user");
        console.log("this is data", data);
        this.setState(data);
        console.log("testing brofile", { Brofile });
    }

    render() {
        if (!this.state.id) {
            return <img src="growing.gif" />;
        }
        return (
            <div style={{ background: "#F5FBEF" }}>
                <div
                    className="header"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        borderBottom: "solid #67912D 2px",
                        padding: "2rem"
                    }}
                >
                    <img
                        style={{
                            height: 5 + "rem",
                            width: 5 + "rem",
                            placeSelf: "center / start",
                            gridColumn: 1 / 2
                        }}
                        src="/rootsLogo.png"
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
                        close={() =>
                            this.setState({ uploaderIsVisible: false })
                        }
                    />
                )}

                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            render={props => {
                                return (
                                    <div
                                        className="body"
                                        style={{ background: "#d8f2c1" }}
                                    >
                                        <Profile
                                            picture={this.state.picture}
                                            first={this.state.first}
                                            last={this.state.last}
                                            bio={this.state.bio}
                                            onClick={() =>
                                                this.setState({
                                                    uploaderIsVisible: true
                                                })
                                            }
                                            done={bio => this.setState({ bio })}
                                        />
                                    </div>
                                );
                            }}
                        />

                        <Route path="/user/:id" component={Brofile} />
                        <Link to="/">home</Link>
                    </div>
                </BrowserRouter>
            </div>
        );
    } //end of render
} //end of class
