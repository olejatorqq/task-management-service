import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/auth">Auth</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;