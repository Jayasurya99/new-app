import React from "react";
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const UserDetail = (props) => {
    const {name, email, phone, position, dept} = props.location.state.contact;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{position} of {dept}</div>
                    <div className="description">{email}</div>
                    <div className="description">{phone}</div>
                </div>
            </div>
                <div className="ui right container" >
                   <Link to={'/'}><button className="ui button black center">Back to Team list</button></Link>
                </div>
        </div>
    )
}

export default UserDetail;