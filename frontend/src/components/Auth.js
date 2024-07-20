import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        try {
            const response = await axios.post(`${process.env.REACT_APP_USER_SERVICE_URL}/api/login`, { username, password });

            if (response.status === 200) {
                // Успешный логин
                console.log('Login successful:', response.data);
                setUser(response.data.user);
                navigate('/tasks');
            } else {
                // Неизвестный статус ответа
                console.error('Unexpected response status:', response.status);
                setError('An unexpected error occurred.');
            }
        } catch (error) {
            // Обработка ошибки при логине
            console.error('Login error:', error.response ? error.response.data : error.message);
            setError('Invalid credentials');
        }
    };

    return (
        <div className="container">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
    );
};

export default Auth;
