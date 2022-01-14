import React from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Home from './Landingpage'
import Store from './store/Store'
import About from './About'
import SingleProduct from './store/SingleProductFetch'
import Checkout from './store/Checkout'
import Menu from "./Menu"
import Cart from "./store/GetCartItems"
import NotFound from './NotFound';

function AppRoute() {
    
    return (
        <>
            <Router>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/store" component={Store} />
                    <Route path='/about' component={About}/>
                    <Route path='/product:id' component={SingleProduct} />
                    <Route path='/cart' component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found"/>
                </Switch>
            </Router>  
        </>
    )
}

export default AppRoute

