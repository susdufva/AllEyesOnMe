import React from "react";

function SingleProductCard({ productName, price, image }) {
  return (
    <>
    
      <div class="flex flex-col justify-center">
        <div class="relative m-2 flex flex-wrap mx-auto justify-center">
          <div class="relative w-1/2 min-w-[340px] bg-black-900 shadow-lg rounded-md mx-1 my-3 cursor-pointer">
            <div class="overflow-x-hidden rounded-t-md relative">
              <img
                class="h-1/3 w-full bg-contain"
                src={image}
                alt="product"
              />
            </div>
            <div class="p-2 pl-4 flex justify-between">
              <div>
                <p class="text-2xl uppercase text-gray-500 mb-0">
                  {productName}
                </p>
                <p class="text-xl text-left text-gray-600 mt-0">{price}kr</p>
              </div>
              <button class="flex flex-col-reverse mb-2 mr-5 group cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 group-hover:opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
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
