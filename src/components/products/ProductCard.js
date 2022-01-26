import React from "react";
import {Link} from "react-router-dom"

function ProductCard({ productName, price, imageSrc, productId, categories }) {

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="relative max-w-sm min-w-[340px] shadow-lg rounded-md mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-t-md relative"> 
             {/* Link to single product page */}
             <Link to={"/product" + productId}> 
                <img className="h-56 w-80 bg-contain" src={imageSrc} alt="product" />
              </Link>
            </div>
            <div className="p-2 pl-4 flex justify-between">
              <p className="text-md font-semibold text-gray-300 mb-0">
                  {productName}
              </p>
              <p className="text-md text-gray-300 mt-0">{price} kr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
