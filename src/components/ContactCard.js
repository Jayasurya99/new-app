import React from "react";
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactCard = (props) => {
    const { name, id, phone, email, team, position, dept } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <h2 className="header">{name}</h2>
                    <div>Mail: {email}</div>
                    <div>Phone: {phone}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", margin: "20px", float: "right" }}
                onClick={() => props.clickHandler(id)}></i>
            <Link to={{ pathname: `/update`, state: { contact: props.contact } }}>
                <i className="edit alternate outline icon" style={{ color: "blue", margin: "20px", float: "right" }}
                ></i>
            </Link>
        </div>
    )
}

export default ContactCard;