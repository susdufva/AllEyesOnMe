import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import loadable from "@loadable/component";

const SingleProductCard = loadable(() => import ("./SingleProductCard"));

//woocommerce API
const api = new WooCommerceRestApi({
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});

function ProductView() {
  let { id } = useParams(); //id from clicked product on previus page
  console.log("id", id);

  const [singleProduct, setSingleProduct] = useState([]); //save response from fetch here
  const [picture, setPicture] = useState(); //save image data here
  const [categorie, setCategorie] = useState(); //save categorie here

  useEffect(() => {
    // useEffect to fetch product with id from api endpoint

    const fecthProduct = async () => {
      const response = await api.get(`products/${id}`);

      if (response.status === 200) {
        setSingleProduct(response.data);
        console.log("RES", response.data);
        setPicture(response.data.images[0].src);
        setCategorie(response.data.categories[0].name);
      }
    };

    fecthProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return singleProduct ? (
    <SingleProductCard
      key={singleProduct.id}
      id={singleProduct.id}
      image={picture}
      productName={singleProduct.name}
      price={singleProduct.price}
      categories={categorie}
    />
  ) : (
    <div className="text-white text-md text-center mt-10">Loading... </div>
  );
}

export default ProductView;
