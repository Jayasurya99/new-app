import React from "react";
import { Link } from 'react-router-dom';

class AddUser extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        name: "",
        phone: "",
        email: "",
        team: "",
        position: "",
        dept: ""
    };

    add = (e) => {
        e.preventDefault();
        if ((this.state.name && this.state.phone && this.state.email && this.state.team && this.state.position && this.state.dept) === "") {
            alert("All fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", phone: "", email: "", team: "", position: "", dept:"" });
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="add-container">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <p>Phone</p>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>
                    <div className="field">
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div class="field">
                        <label>Team</label>
                        <select class="ui search dropdown"
                            value={this.state.team}
                            onChange={(e) => this.setState({ team: e.target.value })}>
                            <option value="">Select Team</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="Head">Head</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Position</label>
                        <select class="ui search dropdown"
                            value={this.state.position}
                            onChange={(e) => this.setState({ position: e.target.value })}>
                            <option value="">Select Position</option>
                            <option value="Head">Head</option>
                            <option value="Team Leader">Team Leader</option>
                            <option value="Team member">Team member</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Department</label>
                        <select class="ui search dropdown"
                            value={this.state.dept}
                            onChange={(e) => this.setState({ dept: e.target.value })}>
                            <option value="">Select Department</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Design">design</option>
                        </select>
                    </div>
                    <button className="ui button black">Add</button> 
                    <Link to={'/'}><button className="ui button black">Back to Home</button></Link>
                </form>
            </div>
        )
    }
}


export default AddUser;