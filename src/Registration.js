import React from "react";
import axios from "axios";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {this.state.error && <div className="error">Ooops!</div>}
                <h1>Plant your profile!</h1>
                <input name="first" placeholder="first name" />
                <input name="last" placeholder="last name" />
                <input name="email" type="email" placeholder="email" />
                <input name="pass" placeholder="password" />
                <label> I am a/an: </label>
                <select id="group_classes" name="group_classes">
                    <option value="amateur">Amateur gardner</option>
                    <option value="pro">
                        Professional (gardner/farmer/agronomist)
                    </option>
                    <option value="curious">Curious</option>
                </select>
                <button>Register</button>
                <p>
                    Already a branch? <a src="#">Log In</a>
                </p>
            </div>
        );
    }
}
