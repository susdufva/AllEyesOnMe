import React, { useContext } from "react";
import {CartContext} from "../CartContext"


function Checkout() {

  const { cart, cartTotal } = useContext(CartContext);
  const shipping = Number(49);


  return (
    <>
    <div class="flex justify-center w-full ">
    {/* <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12"> */}
        <form class="max-w-xl m-4 px-6 py-8 bg-black bg-opacity-30 rounded mt-10 shadow-md">
          <p class="text-gray-300 font-medium">Customer information</p>
          <div class="text-left mt-4">
            <label class="block text-sm text-gray-600" for="cus_name">
              Name
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div class="mt-2 text-left">
            <label class="block text-sm text-gray-600" for="cus_email">
              Email
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div class="mt-2 text-left">
            <label class=" block text-sm text-gray-600" for="cus_email">
              Address
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Email"
            />
          </div>
          <div class="mt-2">
            <label class="hidden text-sm block text-gray-600" for="cus_email">
              City
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="City"
              aria-label="Email"
            />
          </div>
          <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600" for="cus_email">
              Country
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Country"
              aria-label="Email"
            />
          </div>
          <div class="inline-block mt-2 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600" for="cus_email">
              Zip
            </label>
            <input
              class="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Email"
            />
          </div>
        </form>
        </div>
        {/*Order summary here*/ }
        <div class="mb-4 flex justify-center w-full ">
        <form className="flex justify-center w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center w-full text-gray-300 rounded-lg sm:w-4/6 md:w-3/6 lg:w-4/5">
              <div className="py-4 w-4/5 sm:w-full sm:py-8 rounded-lg text-left p-10">
                
                <div className="border-t border-gray-300 mt-5">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span className='pr-1'>{cartTotal + shipping}kr</span>
                  </div>
                  <button className="bg-gray-800 bg-opacity-40 hover:text-gray-500 hover:border-gray-500 text-gray-300 text-sm font-semibold py-2.5 px-4 border border-gray-800 rounded-md shadow w-full uppercase" > 
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </form>
          </div>
    </>
  );
}

export default Checkout;
