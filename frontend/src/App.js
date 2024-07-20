import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contex/AuthContext';
import Auth from './components/Auth';
import Task from './components/Task';

const App = () => (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/tasks" element={<Task />} />
            </Routes>
        </AuthProvider>
    </Router>
);

export default App;
