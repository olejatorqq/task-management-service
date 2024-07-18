import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from '/home/oorlovsk/task-management-service/frontend/src/contex/AuthContext';
import App from './App';
import './styles.css';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);
