import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";

const UserList = (props) => {
    const inputElement = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard contact={contact} key={index} clickHandler={deleteContactHandler} />

        );
    });

    const getSearchTerm = () => {
        // console.log(inputElement.current.value);
        props.searchKeyword(inputElement.current.value);
    }
    return (
        <div className="add-container">
            <div className="main ui">
                <ul>
                    <li><h2 className="left">Contact List</h2><h3>(Click user for Details)</h3></li>
                    <li><div className="ui search right">
                        <div className="ui icon input">
                            <input
                                ref={inputElement}
                                type="text"
                                placeholder="Seach User"
                                className="prompt"
                                value={props.term}
                                onChange={getSearchTerm} />
                            <i className="search icon"></i>
                        </div>
                    </div></li>
                </ul>


                <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No User Available"}</div>
                <Link to={'/'}><button className="ui button black">Back to Home</button></Link>
            </div>
        </div>

    )
}

export default UserList;