import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="relative pt-24 pb-3">
        <div className="">
          <div className="flex justify-between px-8 text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-lg font-semibold text-white">
                Don't be a stranger!
              </h4>
              <div className="flex items-center">
                <a href="https://instagram.com/alleyesonmeshades?utm_medium=copy_link">
                  <span className="p-1 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <span className="text-white p-2 px-4 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </span>
              </div>
            </div>
            <nav className="text-xs sm:text-sm flex flex-wrap justify-center -my-2">
              <div className="px-2 py-2">
                <Link to="/about" className="text-white   hover:text-gray-500">
                  About
                </Link>
              </div>
              <div className="px-2 py-2">
                <Link to="/about" className="text-white   hover:text-gray-500">
                  Contact
                </Link>
              </div>
              <div className="px-2 py-2">
                <Link to="/terms" className="text-white   hover:text-gray-500">
                  Terms
                </Link>
              </div>
            </nav>
          </div>
          <hr className="my-2 border-gray-600 opacity-50" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 font-semibold py-1">
                Copyright © 2022
                <span className="text-gray-500"> All Eyes On Me Shades. </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
