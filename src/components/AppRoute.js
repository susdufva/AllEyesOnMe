import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Landingpage'
import Store from './Store'
import About from './About'
import Navbar from './Navbar'

function AppRoute() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/store' element={<Store/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Router>  
        </>
    )
}

export default AppRoute

