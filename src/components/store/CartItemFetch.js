import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Cart from "./Cart"

//woocommerce API
const api = new WooCommerceRestApi({
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

function CartItemFetch() {

    let { id } = useParams(); //id from clicked product on previus page
    console.log("id", id);

    const [cartItem, setCartItem] = useState([]);
    const [picture, setPicture] = useState(); //save image data here
    const [categorie, setCategorie] = useState(); //save categorie here

    useEffect(() => {
    // useEffect to fetch product with id from api endpoint

    const fecthProduct = async () => {
      const response = await api.get(`products/${id}`);

      if (response.status === 200) {
        setCartItem(response.data);
        console.log("RES", response.data);
        setPicture(response.data.images[0].src);
        setCategorie(response.data.categories[0].name)
      }
    };

    fecthProduct();
  }, []);

  return cartItem ? //if object
    <Cart key={cartItem.id} id={cartItem.id} image={picture} productName={cartItem.name} price={cartItem.price} categories={categorie}/> :
    // if array
    cartItem.map((product)=>{
    
      <Cart key={product.id} productId={product.id} productName={product.name} image={picture} price={product.price} categories={categorie} link={product.permalink} />            
    }) 
} //might need to change this code later if two items are added to cart 

export default CartItemFetch
