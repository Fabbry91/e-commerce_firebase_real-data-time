import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { AuthContext } from '../Context/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';
import { RutasPrivadas } from './RutasPrivadas';

export const RouterApp = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                    <RutasPrivadas
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}
