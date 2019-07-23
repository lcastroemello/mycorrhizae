import React from "react";
import axios from "axios";

export default class Registration extends React.Component {
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
            .post("/Register", {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                pass: this.state.pass,
                group_classes: this.state.group_classes
            })
            .then(({ data }) => {
                if (data.success) {
                    // location.replace("./Logo");
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
                        Ooops!
                    </div>
                )}
                <h1>Plant your profile!</h1>
                <input
                    name="first"
                    placeholder="first name"
                    onChange={e => this.handleChange(e)}
                />
                <input
                    name="last"
                    placeholder="last name"
                    onChange={e => this.handleChange(e)}
                />
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
                <label> I am a/an: </label>
                <select
                    id="group_classes"
                    name="group_classes"
                    onChange={e => this.handleChange(e)}
                >
                    <option value="null" />
                    <option value="amateur">Amateur gardner</option>
                    <option value="pro">
                        Professional (gardner/farmer/agronomist)
                    </option>
                    <option value="curious">Curious</option>
                </select>
                <button onClick={e => this.submit()}>Register</button>
                <p>
                    Already a branch? <a src="#">Log In</a>
                </p>
            </div>
        );
    }
}
