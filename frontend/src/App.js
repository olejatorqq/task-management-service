import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import Notification from './components/Notification';
import UserProfile from './components/UserProfile';
import AuthProvider from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/tasks" component={TaskList} />
                        <Route path="/notifications" component={Notification} />
                        <Route path="/profile" component={UserProfile} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;