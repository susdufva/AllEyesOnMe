import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function SingleProductCard({ productName, price, image, id, categories }) {
  const {addItem} = useContext(CartContext);

  let product = {
    id: id,
    image: image,
    name: productName,
    price: price,
    categories: categories,
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="relative m-2 flex flex-wrap mx-auto justify-center">
          <div className="relative w-5/6 sm:w-1/2 min-w-[340px] bg-black-900 shadow-lg rounded-md mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-t-md relative">
              <img
                className="h-1/3 w-full bg-contain"
                src={image}
                alt="product"
              />
            </div>
            <div className="p-2 pl-4 flex justify-between">
              <div>
                <p className="text-xl font-semibold text-gray-200 mb-0">
                  {productName}
                </p>
                <p className="text-lg text-left text-gray-200 mt-0">
                  {price} kr
                </p>
              </div>
              {/* Cart icon below*/}
              <button
                onClick={() => addItem(product)}
                id="add-cart"
                className="flex flex-col-reverse mb-2 mr-5 group cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 group-hover:opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductCard;
