import React from 'react'
import { Navbar } from '../pages-home/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages-home/Home';
import { Product } from '../Producto/Product';
import { CheckOut } from '../pages-home/CheckOut';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/product/:prodId" component={ Product } />
                    <Route exact path="/checkout/:prodId" component={ CheckOut } />                   

                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
