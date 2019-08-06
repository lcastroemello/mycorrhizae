import React from "react";
import axios from "./axios";
import { Route, BrowserRouter, Link } from "react-router-dom";

import Uploader from "./uploader";
import ProfilePic from "./profilepic";
import Profile from "./profile";
import BioEditor from "./bioeditor";
import Brofile from "./brofile";
import FindBros from "./findpeople";
import Friends from "./friends";
import Chat from "./chat";

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
                <div
                    style={{
                        background: "#f5fcef",
                        bottom: 0,
                        display: "grid",
                        gridTemplateRows: "1fr 1fr",
                        gridTemplateColumns: "1fr"
                    }}
                >
                    <div
                        className="header"
                        style={{
                            gridRow: "1/2",
                            gridColumn: "1/2",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 7rem",
                            borderBottom: "solid #67912D 2px",
                            padding: "2rem",
                            zIndex: 1
                        }}
                    >
                        <img
                            className="images"
                            style={{
                                placeSelf: "center / start",
                                gridColumn: 1 / 2,
                                height: "4rem",
                                width: "4rem"
                            }}
                            src="/rootsLogo.png"
                            alt="roots logo"
                        />

                        <div
                            className="links"
                            style={{
                                gridColumn: "2 / 3",
                                display: "flex",
                                justifyContent: "space-around",
                                alignSelf: "center",
                                fontFamily: "Lacquer, sans-serif",
                                fontSize: "1.3rem"
                            }}
                        >
                            <style type="text/css">
                                .link{`{color:#67912d; textDecoration:none;}`}
                                .link:hover {`{color:#334431;}`}
                            </style>
                            <Link
                                className="link"
                                style={{
                                    textDecoration: "none"
                                }}
                                to="/users"
                            >
                                Find buddy branches!
                            </Link>

                            <Link
                                className="link"
                                style={{
                                    textDecoration: "none"
                                }}
                                to="/"
                            >
                                My profile
                            </Link>

                            <Link
                                className="link"
                                style={{
                                    textDecoration: "none"
                                }}
                                to="/friends"
                            >
                                My buddy branches
                            </Link>
                        </div>
                        <ProfilePic
                            id="images"
                            picture={this.state.picture}
                            first={this.state.first}
                            last={this.state.last}
                            onClick={() =>
                                this.setState({ uploaderIsVisible: true })
                            }
                        />
                    </div>
                    {this.state.uploaderIsVisible && (
                        <div
                            style={{
                                gridRow: "1/3",
                                gridColumn: "1/2",
                                zIndex: 3
                            }}
                        >
                            <Uploader
                                profilePic={
                                    <ProfilePic
                                        first={this.state.first}
                                        last={this.state.last}
                                        picture={this.state.picture}
                                    />
                                }
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
                        </div>
                    )}

                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => (
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
                                                close={() =>
                                                    this.setState({
                                                        editing: false
                                                    })
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
                            )}
                        />

                        <Route
                            path="/user/:id"
                            render={props => (
                                <Brofile
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                    userId={this.state.id}
                                />
                            )}
                        />
                        <Route path="/users" render={props => <FindBros />} />
                        <Route path="/friends" render={props => <Friends />} />
                        <Route path="/chat" render={props => <Chat />} />
                        <Link
                            className="link"
                            style={{
                                height: "1rem",
                                fontFamily: "Lacquer, sans-serif",
                                fontSize: "1.3rem",
                                textDecoration: "none"
                            }}
                            to="/"
                        >
                            home
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    } //end of render
} //end of class
