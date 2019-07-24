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
        //keeping user and password check separately as an exercise for form validation. It checks both but sends the same error message as a security against attacks.
        axios
            .post("/Login", {
                email: this.state.email,
                pass: this.state.pass
            })
            .then(({ data }) => {
                if (data.success) {
                    location.replace("./Logo");
                } else if (data.usernoexist) {
                    this.setState({
                        noemail: true
                    });
                } else if (data.passfalse) {
                    this.setState({
                        wrongpass: true,
                        noemail: false
                    });
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
                {this.state.noemail && (
                    <div
                        style={{ color: "red", fontSize: 3 + "rem" }}
                        className="error"
                    >
                        Are you sure you are already registered? Did you type
                        your password right? Check your email and password and
                        try again 🥀
                    </div>
                )}
                {this.state.wrongpass && (
                    <div
                        style={{ color: "red", fontSize: 3 + "rem" }}
                        className="error"
                    >
                        Are you sure you are already registered? Did you type
                        your password right? Check your email and password and
                        try again 🥀
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
