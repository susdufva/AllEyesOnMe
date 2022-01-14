import React from "react";

function CartProducts({productId, productName, price, image, categories }) {
 
  const removeItem = ()=>{
    let cartNumber = localStorage.getItem('cartNumber');
    let items = JSON.parse(localStorage["cartItems"]);
  for (let i = 0; i < items.length; i++) {
     if(items[i].id == productId){
       items.splice(i,1);
       break;
     }
  }
    items = JSON.stringify(items);
    localStorage.setItem('cartItems', items);
    localStorage.setItem('cartNumber', cartNumber - 1);

    window.location.reload();
  }

  let products = localStorage.getItem("cartItems")
  return (
    <>
    {products ? 
      <div className="flex -mx-2 px-6 py-5 mt-4 border-b border-gray-300 pb-10">
        <div className="flex w-full">
          {/*  <!-- product --> */}
          <div className="products">
            <img className="w-32 sm:w-48" src={image} alt="product in cart" />
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
              <button onClick={removeItem}>
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
      : 
      <div className="text-white text-lg text-left border-b border-gray-300 pb-9 pt-8 pl-1">Your cart is empty</div> }
    </>
  );
}

export default CartProducts;
