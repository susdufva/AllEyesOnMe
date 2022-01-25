import React, {useContext} from "react";
import Logo from "./img/logo2.png";
import { Link } from "react-router-dom";
import insta from "./img/insta.jpg";
import "./Style.css";
import {CartContext} from "./CartContext"

function Menu() {
 
  const {cart} = useContext(CartContext);

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="">
          <nav id="grad" className="flex text-white text-sm w-screen">
            <div className="px-5 xl:px-12 flex justify-center w-full items-center">
              {/* Nav Links  */}
              <ul className="hidden sm:flex px-4 uppercase tracking-wider font-heading space-x-8 items-center">
                <li>
                  <Link to="/shop" className="hover:text-gray-300">
                    Shop
                  </Link>
                </li>
                <div className="invisible sm:visible h-8 w-px bg-gray-300"></div>
                <li>
                  <Link to="" className="hover:text-gray-300 mr-2">
                    Category
                  </Link>
                </li>
              </ul>
              {/* Logo Here. */}
              <Link to="/">
                <img className="h-24 p-2" src={Logo} alt="logo" />
              </Link>
              <ul className="hidden sm:flex px-4 uppercase tracking-wider font-heading space-x-8 items-center">
                <li>
                  <Link to="/about" className="hover:text-gray-300 ml-2">
                    About
                  </Link>
                </li>
                {/* <!-- Header Icons --> */}
                <div className="invisible sm:visible h-8 w-px bg-gray-300"></div>
                <li>
                  <a
                    className="invisible sm:visible"
                    href="https://instagram.com/alleyesonmeshades?utm_medium=copy_link"
                  >
                    <img className="h-6 hover:opacity-70" src={insta} alt="instagram"></img>
                  </a>
                </li>
              </ul>
              <div className="hidden sm:flex items-center space-x-5 items-center">
                <Link
                  to="/cart"
                  className="flex items-center hover:text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="mb-5">
                    <span id="cart-span">{cart.length ? cart.length : null}</span>
                    {/*if cart.length exists then show cart.lengt, else show null*/}
                  </span>
                </Link>
              </div>
            </div>

            {/* <!-- Responsive navbar --> */}
            <Link to="/cart" className="sm:hidden flex mr-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="mb-5">
                  <span id="cart-span">{cart.length ? cart.length : null}</span>
              </span>
            </Link>
            <div className="flex relative inline-block text-left dropdown">
              <button className="navbar-burger self-center mr-12 sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* Dropdown content here */}
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-1 w-42 mt-2 origin-top-right bg-black border border-white divide-y divide-gray-100 rounded-md outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div className="py-2">
                    <Link
                      to="/shop"
                      tabIndex="0"
                      className="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200"
                      role="menuitem"
                    >
                      Shop
                    </Link>
                    <Link
                      to="/about"
                      tabIndex="1"
                      className="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200"
                      role="menuitem"
                    >
                      About
                    </Link>
                    <a href="https://instagram.com/alleyesonmeshades?utm_medium=copy_link"
                      tabIndex="2"
                      className="text-white flex justify-between w-full px-4 py-2 text-sm uppercase leading-5 text-left hover:text-purple-200"
                      role="menuitem"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Menu;
