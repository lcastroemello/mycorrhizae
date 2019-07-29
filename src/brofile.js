import React from "react";
import axios from "./axios";

export default class Brofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const { data } = await axios.get("/users/" + id + ".json");
        if (data == "same user" || "user does not exist") {
            this.props.history.push("/");
        } else {
            this.setState({
                first: data.first,
                last: data.last,
                bio: data.bio,
                picture: data.picture
            });
        }
    }
    render() {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "0.3fr 1fr",
                    background: "#d8f2c1"
                }}
            >
                <img
                    src={this.state.picture}
                    alt={`${this.state.first} ${this.state.last}`}
                />
                <div
                    style={{
                        placeSelf: "center / start",
                        gridColumn: 2 / 3
                    }}
                >
                    <h2 style={{ padding: 0 }}>
                        {this.state.first} {this.state.last}
                    </h2>
                    <div>{this.state.bio}</div>
                </div>
            </div>
        );
    }
}
