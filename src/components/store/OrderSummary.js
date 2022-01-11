import React from 'react'

function OrderSummary({itemName, price, inCart}) {
    
    const totalPrice = price + price; 
    console.log(totalPrice)
    return (
        <>
          <form className="md:mt-28 flex justify-center w-full lg:w-2/6">
            <div className="flex flex-col justify-center items-center w-full text-gray-800 rounded-lg sm:w-4/6 md:w-3/6 lg:w-4/5">
              <div className="py-4 w-4/5 sm:w-full sm:py-8 bg-gray-300 rounded-lg  text-left p-10">
                <h1 className=" font-semibold text-lg sm:text-xl border-b border-gray-800 sm:pb-6">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-5 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    {itemName}
                  </span>
                  <span className="font-semibold text-sm">{price}</span>
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
        </>
    )
}

export default OrderSummary
