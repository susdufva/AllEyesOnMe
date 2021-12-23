import React from 'react'
import {Link} from 'react-router-dom'
import "./Style.css"

function Navbar() {
    return (
        <>  
            <div className="h-32 w-full bg-black ">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex h-full items-center  hover:bg-gray-800">
                        <Link to="/store" className="invisible sm:visible mx-8 text-white uppercase text-sm tracking-wider">Store</Link>
                        <div className="invisible sm:visible h-8 w-px bg-gray-300"></div>
                        {/* invisble by default, visible on screen bigger than sm */}
                    </div>
                    <div className="flex h-full items-center  hover:bg-gray-800">
                        <div className="invisible sm:visible mx-7 text-white uppercase text-sm tracking-wider">Opcioi</div>
                    </div>
                    <div className="flex h-full items-center">
                        <div className="logo"></div>
                    </div>
                    <div className="flex h-full items-center  hover:bg-gray-800">
                        <Link to="/about" className="invisible sm:visible mx-7 text-white uppercase text-sm tracking-wider">About</Link>
                        <div className="invisible sm:visible h-8 w-px bg-gray-300"></div>
                    </div>
                    <div className="flex h-full  items-center hover:bg-gray-800">
                        <Link to="/about" className="invisible sm:visible mx-8 text-white uppercase text-sm tracking-wider">About</Link>
                    </div> 
                </div>
            </div>
            {/* Navbar on small screen */}
            <div className="block lg:hidden md:hidden">
                <div class=" relative inline-block text-left dropdown m-4">
                    <button
                        id="nav"
                        className="flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-purple-200 hover:border-purple-200">
                        <svg 
                            className="fill-current h-3 w-3" viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div class="absolute right-0 w-42 mt-2 origin-top-right bg-black border border-white divide-y divide-gray-100 rounded-md outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                            <div class="py-2">
                                <Link to="/store" tabindex="0" class="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200"  role="menuitem" >Store</Link>
                                <Link to="/about" tabindex="1" class="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200"  role="menuitem" >About</Link>
                                <Link to="/strategy" tabindex="2" class="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200" role="menuitem" >Strategy</Link>
                            </div>    
                        </div>
                    </div>              
                </div>
            </div>
        </>
    )
}

export default Navbar
