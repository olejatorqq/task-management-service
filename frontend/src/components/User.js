import React, { useState, useEffect } from 'react';
import axios from 'axios';
import htmlContent from '../../static/users.html';
import parse from 'html-react-parser';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(response => setUsers(response.data));
    }, []);

    return (
        <div>
            {parse(htmlContent)}
            <ul className="list-group mt-4" id="user-list">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">
                        <h5>{user.name}</h5>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;