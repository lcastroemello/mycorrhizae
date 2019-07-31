import React from "react";
import axios from "./axios";

export default class BioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        this.setState((state, props) => ({ draft: props.bio }));
    }
    draft(e) {
        this.setState({
            draft: e.target.value
        });
    }
    async submit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post("/bio", {
                bio: this.state.draft
            });
            this.props.done(this.state.draft);
            this.setState({
                editing: false
            });
        } catch (err) {
            console.log("err in post/bio", err);
        }
    }
    render() {
        console.log("this.state", this.state);
        return (
            <div>
                {this.state.editing && (
                    <div>
                        <h2>
                            Tell us about yourself! What are your current plans
                            related to urban agriculture or gardening? What are
                            you expecting from our community? Plant your seeds
                            here!
                        </h2>
                        <textarea
                            onChange={({ target }) => {
                                this.setState({ draft: target.value });
                            }}
                            name="draftBio"
                        />
                        <button onClick={e => this.submit(e)}>Save</button>
                    </div>
                )}
                {!this.state.editing && (
                    <div>
                        <div>
                            {this.props.bio && <p>{this.props.bio}</p>}
                            <button
                                onClick={() => this.setState({ editing: true })}
                            >
                                {this.props.bio ? "Edit bio" : "Add bio"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
