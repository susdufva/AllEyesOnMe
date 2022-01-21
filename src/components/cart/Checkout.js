import React, { useContext, useState, useCallback } from "react";
import { CartContext } from "../CartContext";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51Ix6VKGrcoIWM135GevI9SHxbf160SNLxwuTZREQgJ8rHosAFKq8DoHBaVZmc17zxtTZwPrCvNdlRl1EM8lWCZ3h00UacgPyVY"
);
//public key, dont need .env

const api = new WooCommerceRestApi({
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

function Checkout() {

  const { cart, cartTotal} = useContext(CartContext);
  const shipping = Number(49);

  const initialValue = {
    first_name: " ",
    last_name: " ",
    email: " ",
    address_1: "",
    city: "",
    country: "",
    postcode: "",
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [error, setError] = useState(""); //show error message if response fails

  const handleOnChange = useCallback(
    (e) => {
      setFormValues((values) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormValues]
  );

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = {
        //values required by the api
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
          first_name: formValues.first_name,
          last_name: formValues.last_name,
          address_1: formValues.address_1,
          address_2: "",
          city: formValues.city,
          state: "",
          postcode: formValues.postcode,
          country: formValues.country,
          email: formValues.email,
          phone: " ",
        },
        shipping: {
          first_name: formValues.first_name,
          last_name: formValues.last_name,
          address_1: formValues.address_1,
          address_2: "",
          city: formValues.city,
          state: "",
          postcode: formValues.postcode,
          country: formValues.country,
        },
        line_items: cart.map((item) => ({
          product_id: item.id,
          quantity: 1,
        })),
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Fraktavgift",
            total: "49.00",
          },
        ],
      };
      //send values to woocommerce endpoint
      await api
        .post("orders", data)
        .then((e) => console.log(e))
        .catch((error) => {
          setError("Something went wrong, please try again");
          console.log(error.response);
        });
    },
    [formValues, cart]
  );

  const loadStripe = async (event) => {
    const stripe = await stripePromise;

    //axios request to create Checkout Session
    await axios
      .post("http://localhost:4242/create-checkout-session", {
        name: "All Eyes On Me Shades",
        price: cartTotal + shipping,
      })
      .then((e) => {
        const session = e.data.id;
        console.log(session);
        stripe.redirectToCheckout({
          sessionId: session,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col justify-center w-full items-center"
      >
        <div className="sm:w-4/6 md:w-3/6 lg:w-2/6 m-4 px-6 py-8 bg-black bg-opacity-30 rounded mt-10 shadow-md">
          <p className="text-gray-300 font-medium">Customer information</p>
          <div className="text-left inline-block mt-4 w-1/2 pr-1">
            <label className="block text-sm text-gray-600">First name</label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="first_name"
              name="first_name"
              type="text"
              value={formValues.first_name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="text-left inline-block mt-2 pl-1 w-1/2">
            <label className="block text-sm text-gray-600">Last name</label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="last_name"
              name="last_name"
              type="text"
              value={formValues.last_name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mt-2 text-left">
            <label className="block text-sm text-gray-600">Email</label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="email"
              name="email"
              type="text"
              placeholder="Your Email"
              aria-label="Email"
              value={formValues.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mt-2 text-left">
            <label className=" block text-sm text-gray-600">Address</label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="address_1"
              name="address_1"
              type="text"
              placeholder="Street"
              value={formValues.address_1}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mt-2">
            <label className="hidden text-left text-sm block text-gray-600">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="city"
              name="city"
              type="text"
              placeholder="City"
              value={formValues.city}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="hidden block text-sm text-gray-600">
              Country
            </label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="country"
              name="country"
              type="text"
              placeholder="Country"
              value={formValues.country}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="inline-block mt-2 pl-1 w-1/2">
            <label className="hidden block text-sm text-gray-600">Zip</label>
            <input
              className="w-full px-2 py-2 text-gray-50 bg-gray-800 bg-opacity-70 rounded"
              id="postcode"
              name="postcode"
              type="number"
              placeholder="Zip"
              value={formValues.postcode}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        {/*Order summary here*/}
        <div className="mb-4 flex justify-center w-full ">
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center w-full text-gray-300 sm:w-4/5 md:w-3/5 lg:w-4/5">
              <div className="py-4 w-full sm:py-8 rounded-lg text-left p-10">
                {/*Show error message here*/}
                <span>{error}</span>
                <div className="border-t border-gray-500 mt-5">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span className="pr-1">{cartTotal + shipping}kr</span>
                  </div>
                  <button
                    onClick={loadStripe}
                    className="bg-gray-800 bg-opacity-40 hover:text-gray-600 hover:border-gray-500 text-gray-300 text-sm font-semibold py-2.5 px-4 border border-gray-800 rounded-md shadow w-full uppercase"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
