import React, { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";

function Cart({id, image, productName, price, categories}) {
  
  let cart = document.querySelectorAll('#add-cart'); //element id from add to cart button on previous page
  //localStorage.setItem("productId", id); //save product id to localstorage

  let products =[ //products get value from props 
      {
          id: id,
          name: productName, 
          price: price,
      },
  ] 

  //const [productsInCart, setProductsInCart] = useState(products); //set productsInCart from props saved in const products 

  const product = {id, image, productName, price, categories}
  console.log("produkt", product)
  console.log("produkts", products)


  return (
    <>
      {/* Ny kod  */}
      <section className="sm:mt-6">
        <div className="flex flex-col h-full mx-auto lg:justify-center lg:flex-row ">
          <div className="flex-col items-center justify-center w-full lg:w-3/5 md:flex ">
            <div className="w-full h-full sm:px-20 px-6 py-14">
              <div className="flex justify-between border-b border-gray-300 pb-8">
                <h1 className="font-bold text-gray-300 text-2xl">
                  Shopping Cart
                </h1>
              </div>
              <div className="flex -mx-2 px-6 py-5 mt-4 border-b border-gray-300 pb-10">
                <div className="flex w-full">
                  {/*  <!-- product --> */}
                  <div className="">
                    <img
                      className="w-32 sm:w-48"
                      src={image}
                      alt="product in cart"
                    />
                  </div>
                  <div className="flex flex-col text-left ml-4 flex-grow">
                    <span className="font-bold text-gray-600 text-2xl pb-1">
                      {productName}
                    </span>
                    <span className="text-gray-500 text-xs pb-1">{categories}</span>
                    <span className="font-semibold text-lg text-gray-500 text-xs">
                      {price}kr
                    </span>
                    <div className="flex justify-end px-1">
                      <button>
                        <svg
                          className="hover:opacity-70"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          fill="grey"
                          fill-opacity="0.7"
                          height="15"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Order summary section */}
          <form className="md:mt-28 flex justify-center w-full lg:w-2/6">
            <div className="flex flex-col justify-center items-center w-full text-gray-800 rounded-lg sm:w-4/6 md:w-3/6 lg:w-4/5">
              <div className="py-4 w-4/5 sm:w-full sm:py-8 bg-gray-300 rounded-lg  text-left p-10">
                <h1 className=" font-semibold text-lg sm:text-xl border-b border-gray-800 sm:pb-6">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-5 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items 3
                  </span>
                  <span className="font-semibold text-sm">590$</span>
                </div>
                <div className="flex justify-between mt-5">
                  <span className="font-semibold text-sm uppercase">
                    Shipping
                  </span>
                  <span className="font-semibold text-sm">5$</span>
                </div>
                <div className="border-t border-gray-800 mt-5">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                  </div>
                  <button className="bg-gray-800 font-semibold rounded-md hover:bg-gray-700 py-3 text-sm text-white uppercase w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Cart;
