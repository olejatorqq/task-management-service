import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contex/AuthContext';
import App from './App';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);