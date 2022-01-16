import React, { useState, useEffect } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import ProductCard from "./ProductCard";

//get products from woocommerce with API
const api = new WooCommerceRestApi({ 
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

console.log("api", api);

function GetAllProducts() {
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
      <div className="grid grid-cols-3 gap-1 mt-4">
      
      {products.map((product)=>{
        const firstImageSrc = product.images[0] && product.images[0].src ? product.images[0].src : '';
        return (
          <ProductCard key={product.id} productId={product.id} productName={product.name} imageSrc={firstImageSrc} price={product.price} categories={product.categories} link={product.permalink} /> 
                )    
      }) }
        
      </div>
    </>
  );
}

export default GetAllProducts;
