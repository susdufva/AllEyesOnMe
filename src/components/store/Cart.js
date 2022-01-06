import React from "react";
import { useParams } from "react-router-dom";

function Cart() {
  let { id } = useParams(); //id from clicked product on previus page
  console.log("id", id);

  return (
    <>
      <p>id = {id}</p>

      {/* Ny kod  */}
      <section className="h-screen ">
        <div className="flex flex-col h-full mx-auto lg:justify-center lg:flex-row">
          <div className="flex-col items-center justify-center hidden w-full lg:w-3/5  md:flex bg-start">
            <div className="w-full h-full px-20 py-14">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-bold text-gray-300 text-2xl">
                  Shopping Cart
                </h1>
              </div>
              <div className="flex -mx-2 px-6 py-5 mt-4 border-b pb-10">
                <div className="flex w-2/5 ">
                  {/*  <!-- product --> */}
                  <div className="w-24">
                    <img
                      className="h-32"
                      src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-left ml-4 flex-grow">
                    <span className="font-bold text-gray-600 text-sm pb-1">
                      Iphone 6S
                    </span>
                    <span className="text-gray-500 text-xs pb-1">Apple</span>
                    <span className="font-semibold text-sm text-gray-500 text-xs">
                      Remove kr
                    </span>
                  </div>
                </div>

                <svg
                  className="w-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                </svg>
              </div>
            </div>
          </div>

          <form className="flex justify-center w-full lg:w-2/6">
            <div className="flex flex-col justify-center w-full text-gray-800 rounded-lg sm:w-4/6 md:w-3/6 lg:w-4/5 dark:text-gray-100">
              <div className="py-8 bg-gray-600 rounded-lg border-gray-300 text-left p-10">
                <h1 className=" font-semibold text-xl border-b pb-6">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-5 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items 3
                  </span>
                  <span className="font-semibold text-sm">590$</span>
                </div>
                <div className="flex justify-between mt-5">
                  <span className="font-semibold text-sm uppercase">
                    Shipping
                  </span>
                  <span className="font-semibold text-sm">5$</span>
                </div>

                <div className="border-t mt-5">
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
        </div>
      </section>
    </>
  );
}

export default Cart;
