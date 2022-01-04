import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Landingpage'
import Store from './store/Store'
import About from './About'
import Navbar from './Navbar'
import SingleProduct from './store/SingleProductFetch'
import Checkout from './store/Checkout'
import ProductView from './store/ProductView';
import SingleProductFetch from './store/SingleProductFetch';


function AppRoute() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/store' element={<Store/>} >
                        <Route path=":id" element={<ProductView/>}/>
                        </Route>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/product' element={<SingleProductFetch/>} />
                  
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
            </Router>  
        </>
    )
}

export default AppRoute

