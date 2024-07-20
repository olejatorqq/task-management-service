import React, { useContext, useState, useEffect, useCallback } from 'react';
import { AuthContext } from '../contex/AuthContext';

const Auth = () => {
    const { login, logout, user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        login({ email, password });
    }, [email, password, login]);

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
    }, [handleSubmit]);

    return (
        <div className="container">
            {user ? (
                <div>
                    <h2>Welcome, {user.email}</h2>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <form id="auth-form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Auth;