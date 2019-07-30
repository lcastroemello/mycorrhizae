import React from "react";
import axios from "./axios";
import { Route, BrowserRouter, Link } from "react-router-dom";

import Uploader from "./uploader";
import ProfilePic from "./profilepic";
import Profile from "./profile";
import BioEditor from "./bioeditor";
import Brofile from "./brofile";
import FindBros from "./findpeople";

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
        this.setState(data);
    }

    render() {
        if (!this.state.id) {
            return <img src="growing.gif" />;
        }
        return (
            <BrowserRouter>
                <div style={{ background: "#F5FBEF", bottom: 0 }}>
                    <div
                        className="header"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 7rem",
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

                        <div
                            className="links"
                            style={{
                                gridColumn: 2 / 3,
                                placeSelf: "end"
                            }}
                        >
                            <Link to="/users">Find buddy branches!</Link>
                            <br />
                            <Link to="/">My profile</Link>
                        </div>

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
                                this.setState({
                                    picture,
                                    uploaderIsVisible: false
                                })
                            }
                            close={() =>
                                this.setState({ uploaderIsVisible: false })
                            }
                        />
                    )}

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
                                            bioEditor={
                                                <BioEditor
                                                    bio={this.state.bio}
                                                    done={bio =>
                                                        this.setState({ bio })
                                                    }
                                                />
                                            }
                                            profilePic={
                                                <ProfilePic
                                                    first={this.state.first}
                                                    last={this.state.last}
                                                    picture={this.state.picture}
                                                    onClick={() => {
                                                        this.setState({
                                                            uploaderIsVisible: true
                                                        });
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                );
                            }}
                        />

                        <Route
                            path="/user/:id"
                            render={props => (
                                <Brofile
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route path="/users" render={props => <FindBros />} />
                        <Link to="/">home</Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    } //end of render
} //end of class
