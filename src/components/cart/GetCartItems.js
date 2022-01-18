import React, {useContext} from "react";
import CartCard from "./CartProductCard";
import OrderSummary from "./OrderSummary";
import {CartContext} from "../CartContext"

function GetCartItems() {

  const {cart} = useContext(CartContext)

  return (
    <section className="sm:mt-6">
      <div className="flex flex-col h-full mx-auto lg:justify-center lg:flex-row ">
        <div className="flex-col items-center justify-center w-full lg:w-3/5 md:flex ">
          <div className="w-full h-full sm:px-20 px-6 py-14">
            <div className="flex justify-between border-b border-gray-700 pb-8">
              <h1 className="font-bold text-gray-300 text-2xl">
                Shopping Cart
              </h1>
            </div>
            {/*Products in cart here*/}
            {cart.length ? cart.map((product) => {
              return (
                <CartCard
                  key={product.id}
                  product={product}
                />
              );
            })  : 
            <div className="text-white text-lg text-left border-b border-gray-300 pb-9 pt-8 pl-1">Your cart is empty</div> }
          </div>
        </div>
        {/*order summary here*/}
        {cart.length ? 
        <OrderSummary /> : null}
      </div>
    </section>
  );
}

export default GetCartItems;
