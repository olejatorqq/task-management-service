import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_NOTIFICATION_SERVICE_URL}/notifications`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications', error);
            }
        };

        fetchNotifications();
    }, [auth]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
