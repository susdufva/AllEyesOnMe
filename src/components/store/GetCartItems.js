import React from "react";
import CartCard from "./CartProducts";
import OrderSummary from "./OrderSummary";

function GetCartItems() {

  let cartItems = localStorage.getItem("cartItems");
  cartItems = JSON.parse(cartItems);

  return (
    <section className="sm:mt-6">
      <div className="flex flex-col h-full mx-auto lg:justify-center lg:flex-row ">
        <div className="flex-col items-center justify-center w-full lg:w-3/5 md:flex ">
          <div className="w-full h-full sm:px-20 px-6 py-14">
            <div className="flex justify-between border-b border-gray-300 pb-8">
              <h1 className="font-bold text-gray-300 text-2xl">
                Shopping Cart
              </h1>
            </div>
            {/*Products in cart here*/}
            {cartItems ? cartItems.map((product) => {
              return (
                <CartCard
                  key={product.id}
                  productId={product.id}
                  productName={product.name}
                  price={product.price}
                  image={product.image}
                  categories={product.categories}
                /> 
              );
            }) :
            <CartCard/>}
          </div>
        </div>
        {/*order summary here*/}
        {cartItems ? 
        <OrderSummary /> : <div> </div>}
      </div>
    </section>
  );
}

export default GetCartItems;
