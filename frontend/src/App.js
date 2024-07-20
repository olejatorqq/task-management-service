import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contex/AuthContext';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Notification from './components/Notification';
import User from './components/User';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <AuthProvider>
            <Router>
                <div>
                    {user && <Navbar />}
                    <Switch>
                        <Route path="/auth" component={Auth} />
                        <Route path="/tasks" component={Task} />
                        <Route path="/notifications" component={Notification} />
                        <Route path="/users" component={User} />
                        <Redirect from="/" to={user ? "/tasks" : "/auth"} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
