import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({ username: '', password: '', email: '' });
    const history = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_AUTH_SERVICE_URL}/register`, user);
            history.push('/login');
        } catch (error) {
            console.error('Registration error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
