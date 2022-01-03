import React, {useState, useEffect} from "react";
import { useParams } from "@reach/router";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import SingleProductCard from "./SingleProductCard";


//get products from woocommerce with API
const api = new WooCommerceRestApi({ 
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

function SingleProductFetch() {

  let {id} = useParams();

  console.log("produkt", id)

  const [product, setProduct] = useState([]);

  useEffect(() => {
    SingleProductCard(id)
    .then(setProduct)
  }, [id]);

 
  return (
    <>
      {product.map((product)=>{
        const firstImageSrc = product.images[0] && product.images[0].src ? product.images[0].src : '';
        return (
          <SingleProductCard key={product.id} productId={product.id} productName={product.name} imageSrc={firstImageSrc} price={product.price} categories={product.categories} link={product.permalink} /> 
                )    
      }) }
    </>
  );
}

export default SingleProductFetch;
