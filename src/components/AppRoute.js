import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Landingpage";
import Shop from "./products/GetAllProducts";
import About from "./About";
import SingleProduct from "./products/SingleProductFetch";
import Checkout from "./cart/Checkout";
import Menu from "./Menu";
import Cart from "./cart/GetCartItems";
import NotFound from "./NotFound";
import { CartProvider } from "./CartContext";

function AppRoute() {
  return (
    <>
      <Router>
        <CartProvider>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/product:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </CartProvider>
      </Router>
    </>
  );
}

export default AppRoute;
