import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contex/AuthContext';
import htmlContent from '../../static/auth.html';
import parse from 'html-react-parser';

const Auth = () => {
    const { login, logout, user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const form = document.getElementById('auth-form');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <div>
            {user ? (
                <div className="container">
                    <h2>Welcome, {user.email}</h2>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            ) : (
                parse(htmlContent)
            )}
        </div>
    );
};

export default Auth;