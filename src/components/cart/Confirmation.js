import React, { useEffect, useContext, useCallback } from "react";
import {CartContext} from "../CartContext"

function Confirmation() {

    /* const {clearCart} = useContext(CartContext);
    //clear cart when confirmation page renders
    useEffect(()=>{
        clearCart
    }, []) */
    

  return (
    <>
      <div className="flex justify-center h-screen w-full">
        <div className="flex flex-col justify-center h-3/5 items-center w-full text-gray-300 ">
          <div className="flex flex-col justify-center items-center  ">
            <span className="text-purple-400 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
            </span>
            <p className="font-bold text-2xl sm:text-4xl sm:pb-4 ">
              Thank you for your order!
            </p>
          </div>
          <p className="text-sm sm:text-lg italic">A confirmation has been sent to your email</p>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
