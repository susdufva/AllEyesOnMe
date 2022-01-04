import React from 'react'
import { useParams } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

//get products from woocommerce with API
const api = new WooCommerceRestApi({ 
    url: "http://localhost/AllEyesOnMe/wordpress/",
    consumerKey: process.env.REACT_APP_CUSTOMERKEY,
    consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
    version: "wc/v3",
  });

function ProductView() {

    let {id} = useParams();
    let params = useParams(); 

    console.log("id", id);
    return (
        <>
        <div className="text-lg text-white">
            produkt view {id}
        </div>
        <h2 className="text-lg text-purple-600">id. {params.id}</h2>
        <img className="h-48 w-full bg-contain" src={params.image} 
        alt="product"/>
        <p className="text-lg text-white">{params.name}</p>
        </>
    )
}

export default ProductView
