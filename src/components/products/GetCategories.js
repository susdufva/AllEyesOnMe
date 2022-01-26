import React, { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Cat from "./Categories";

//get categories from woocommerce with API
const api = new WooCommerceRestApi({
  url: "http://localhost/AllEyesOnMe/wordpress/",
  consumerKey: process.env.REACT_APP_CUSTOMERKEY,
  consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
  version: "wc/v3",
});
function Category() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    //useEffect to fetch API
    fetchCat();
  }, []);

  let fetchCat = async () => {
    await api
      .get("products/categories")
      .then((response) => {
        if (response.status === 200) {
          setCat(response.data);
          console.log("CAT", response.data);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <>
      {cat.map((categories) => {
        return (
          <Cat
            key={categories.id}
            categoriesId={categories.id}
            categoriesName={categories.name}
          />
        );
      })}
    </>
  );
}

export default Category;
