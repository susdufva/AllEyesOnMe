import React, { useContext } from "react";
import Logo from "./img/logo2.png";
import { Link } from "react-router-dom";
import "./Style.css";
import { CartContext } from "./CartContext";

function Menu() {
  const { cart } = useContext(CartContext);
  //cart is used to show quantity of products in cart

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
                <div className="invisible sm:visible h-8 w-px bg-gray-300 bg-opacity-30"></div>
                <li>
                  <Link to="/cat" className="hover:text-gray-300 mr-2">
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
                <div className="invisible sm:visible h-8 w-px bg-gray-300 bg-opacity-30"></div>
                <li>
                  <a
                    className="invisible sm:visible"
                    href="https://instagram.com/alleyesonmeshades?utm_medium=copy_link"
                  >
                    <svg  /* <!-- instagram Icon --> */
                      className="text-white hover:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="hidden sm:flex items-center space-x-5 items-center">
                <Link
                  to="/cart"
                  className="flex items-center hover:text-gray-300"
                >
                  <svg /* <!-- cart Icon --> */
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
                    <span id="cart-span">
                      {cart.length ? cart.length : null}
                    </span>
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
                    <a
                      href="https://instagram.com/alleyesonmeshades?utm_medium=copy_link"
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
