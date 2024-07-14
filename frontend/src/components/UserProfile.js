import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_USER_SERVICE_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUser();
    }, [auth]);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
