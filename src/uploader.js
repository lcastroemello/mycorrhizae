import React from "react";
import axios from "./axios";

import ProfilePic from "./profilepic";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    upload(a) {
        console.log("upload runs", a.target.files[0]);
        var formData = new FormData();
        formData.append("file", a.target.files[0]);
        let self = this;
        axios
            .post("/upload", formData)
            .then(function(resp) {
                self.props.done(resp.data.url);
            })
            .catch(function(err) {
                console.log("error in post/upload: ", err);
            });
    }
    render() {
        return (
            <div
                className="outer"
                style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    height: "100vh",
                    width: "100vw",
                    display: "grid"
                }}
            >
                <div
                    className="inner"
                    style={{
                        display: "grid",
                        justifySelf: "center",
                        alignSelf: "center",
                        background: "#67912d",
                        height: "50vh",
                        width: "50vw",
                        color: "#5C3C02",
                        alignItems: "start"
                    }}
                >
                    <div
                        style={{
                            placeSelf: "center"
                        }}
                    >
                        {this.props.profilePic}
                    </div>
                    <p
                        onClick={() => this.props.close()}
                        style={{
                            color: "tomato",
                            fontSize: "2rem",
                            justifySelf: "right",
                            paddingRight: "1rem"
                        }}
                    >
                        X
                    </p>
                    <h1
                        style={{
                            fontSize: "2rem",
                            justifySelf: "center"
                        }}
                    >
                        Want to change your profile picture?
                    </h1>
                    <input
                        className="picUpload"
                        type="file"
                        accept="image/*"
                        onChange={a => this.upload(a)}
                        style={{
                            justifySelf: "center"
                        }}
                    />
                </div>
            </div>
        );
    }
}
