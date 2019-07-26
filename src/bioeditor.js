import React from "react";
import axios from "./axios";

export default class BioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    draft(e) {
        console.log("testing draft: ", e.target.value);
        this.setState({
            draft: e.target.value
        });
    }
    async submit(e) {
        e.preventDefault();
        console.log("testing button draft ", this.state.draft);
        let data = await axios.post("/bio", {
            bio: this.state.draft
        });
    }
    render() {
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
                            onChange={e => this.draft(e)}
                            name="draftBio"
                        />
                        <button onClick={e => this.submit(e)}>Save</button>
                    </div>
                )}

                {this.props.bio}
                <button onClick={() => this.setState({ editing: true })}>
                    Add your bio!
                </button>
            </div>
        );
    }
}
