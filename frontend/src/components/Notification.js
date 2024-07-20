import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('/api/notifications').then(response => setNotifications(response.data));
    }, []);

    return (
        <div className="container">
            {ReactHtmlParser(`
                <ul class="list-group mt-4" id="notification-list"></ul>
            `)}
            <ul className="list-group mt-4" id="notification-list">
                {notifications.map(notification => (
                    <li key={notification.id} className="list-group-item">
                        <p>{notification.message}</p>
                        <p><strong>Recipient:</strong> {notification.recipient}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
