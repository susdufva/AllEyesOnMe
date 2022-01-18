import React, {useContext} from 'react'
import { CartContext } from '../CartContext';
import {Link} from "react-router-dom"

function OrderSummary() {

  const {cartTotal} = useContext(CartContext);
  const shipping = Number(49);

    return (
        <>
          <form className="md:mt-6 mb-4 flex justify-center w-full lg:w-2/6">
            <div className="flex flex-col justify-center items-center w-full text-gray-300 rounded-lg sm:w-4/6 md:w-3/6 lg:w-4/5">
              <div className="py-4 w-4/5 sm:w-full sm:py-8 rounded-lg text-left p-10">
                <h1 className="font-semibold text-lg sm:text-xl border-b border-gray-700 sm:pb-6">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-5 mb-3">
                  <span className="font-semibold text-xs uppercase">
                    Order Value
                  </span>
                  <span className="font-semibold text-xs pr-1">{cartTotal}kr</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-xs uppercase">
                    Shipping
                  </span>
                  <span className="font-semibold text-xs pr-1">{shipping}kr</span>
                </div>
                <div className="border-t border-gray-700 mt-5">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span className='pr-1'>{cartTotal + shipping}kr</span>
                  </div>
                  <Link to="/checkout" className="block text-center bg-gray-800 bg-opacity-40 hover:text-gray-500 hover:border-gray-500 text-gray-300 text-sm font-semibold py-2.5 px-4 border border-gray-400 rounded-md shadow w-full uppercase" > 
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </>
    )
}

export default OrderSummary
