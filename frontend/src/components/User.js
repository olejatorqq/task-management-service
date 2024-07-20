import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(response => setUsers(response.data));
    }, []);

    return (
        <div className="container">
            <h2>Users</h2>
            <ul className="list-group mt-4" id="user-list">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">
                        <h5>{user.username}</h5>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;