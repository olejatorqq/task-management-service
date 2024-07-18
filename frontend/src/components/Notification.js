import React, { useState, useEffect } from 'react';
import axios from 'axios';
import htmlContent from '../../static/notifications.html';
import parse from 'html-react-parser';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('/api/notifications').then(response => setNotifications(response.data));
    }, []);

    return (
        <div>
            {parse(htmlContent)}
            <ul className="list-group mt-4" id="notification-list">
                {notifications.map(notification => (
                    <li key={notification.id} className="list-group-item">
                        <h5>{notification.title}</h5>
                        <p>{notification.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;