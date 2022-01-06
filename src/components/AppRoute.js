import React from 'react'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Landingpage'
import Store from './store/Store'
import About from './About'
import Navbar from './Navbar'
import SingleProduct from './store/SingleProductFetch'
import Checkout from './store/Checkout'
import Menu from "./Menu"



function AppRoute() {
    return (
        <>
            <Router>
                <Navbar/>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/store" component={Store} />
                    <Route path='/about' component={About}/>
                    <Route path='/product:id' component={SingleProduct} />
                  
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </Router>  
        </>
    )
}

export default AppRoute

