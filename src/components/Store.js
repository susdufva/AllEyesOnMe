import React, {useState, useEffect} from 'react'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

function Store() {

    const api = new WooCommerceRestApi({
        url: "http://localhost/AllEyesOnMe/wordpress/",
        consumerKey: process.env.REACT_APP_CUSTOMERKEY,
        consumerSecret: process.env.REACT_APP_CUSTOMERSECRET,
        version: "wc/v3"
      });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
      }, []);
    
      let fetchProducts = () => {
        api
          .get("products", {
            per_page: 10,
          })
          .then((response) => {
            if (response.status === 200) {
              setProducts(response.data);
              console.log("RES", response.data);
            }
          })
          .catch((error) => {});
      };

    return (
        <div>
        
        </div>
    )
}

export default Store
