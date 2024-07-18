import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Task from './components/Task';
import Notification from './components/Notification';
import User from './components/User';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Route path="/tasks" component={Task} />
                    <Route path="/notifications" component={Notification} />
                    <Route path="/users" component={User} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;