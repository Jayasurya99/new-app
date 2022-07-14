import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link className="left" to="/">Hierarchy UI</Link></li>
                <li><Link className="right" to="/user">Search</Link></li>
                <li><Link className="right" to="/user">User List</Link></li>
                <li><Link className="right" to="/add">Add User</Link></li>
            </ul>
        </div>

    );
}

export default Header;