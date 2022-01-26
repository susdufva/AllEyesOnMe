import React, { useState, useEffect, Suspense } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import PropagateLoader from "react-spinners/PropagateLoader";
const ProductCard = React.lazy(() => import("./ProductCard"));

//get products from woocommerce with API
const api = new WooCommerceRestApi({
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

console.log("api", api);

function GetAllProducts({ hasMore, fetchMore }) {
  //useState to set response.data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //useEffect to fetch API
    fetchProducts();
  }, []);

  let fetchProducts = async () => {
    await api
      .get("products", {
        per_page: 100,
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
          console.log("RES", response.data);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <>
      <Suspense
        fallback={ //fallback while waiting on the products to load
          <div className="min-h-screen text-white text-lg mt-14">
            Entering the shop..
            <PropagateLoader />
          </div>
        }
      >
        <div
          id="grid"
          className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-4 mb-4 sm:p-2"
        >
          {products.map((product) => {
            const firstImageSrc =
              product.images[0] && product.images[0].src
                ? product.images[0].src
                : "";
            return (
              <ProductCard
                key={product.id}
                productId={product.id}
                productName={product.name}
                imageSrc={firstImageSrc}
                price={product.price}
                categories={product.categories}
                link={product.permalink}
              />
            );
          })}
        </div>
      </Suspense>
    </>
  );
}

export default GetAllProducts;
