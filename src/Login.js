import React from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submit() {
        console.log("testing state", this.state);
        axios
            .post("/Login", {
                email: this.state.email,
                pass: this.state.pass
            })
            .then(({ data }) => {
                if (data.success) {
                    location.replace("./Logo");
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }
    render() {
        return (
            <div>
                {this.state.error && (
                    <div
                        style={{ color: "red", fontSize: 3 + "rem" }}
                        className="error"
                    >
                        Ooops! Something went wrong. Are you sure you are
                        already registered? Try again 🥀
                    </div>
                )}
                <h1>Water your branch! Log in:</h1>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={e => this.handleChange(e)}
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="password"
                    onChange={e => this.handleChange(e)}
                />
                <button onClick={e => this.submit(e)}>Log in</button>
                <p>
                    Not a branch yet? <Link to="/"> Register! </Link>
                </p>
            </div>
        );
    }
}
