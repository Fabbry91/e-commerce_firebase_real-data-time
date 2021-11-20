import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { DashboardRoutes } from './DashboardRoutes';

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                    <Route path="/" component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
