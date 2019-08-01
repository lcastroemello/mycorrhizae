import React from "react";
import axios from "./axios";

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
                    background: "rgba(0, 0, 0, 0.8)",
                    zIndex: 100,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                <div className="inner">
                    <p onClick={() => this.props.close()}>X</p>
                    <h1> Want to change your profile picture?</h1>
                    <input
                        className="picUpload"
                        type="file"
                        accept="image/*"
                        onChange={a => this.upload(a)}
                    />
                </div>
            </div>
        );
    }
}
