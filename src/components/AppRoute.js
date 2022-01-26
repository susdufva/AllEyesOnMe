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
import Confirmation from "./cart/Confirmation";
import { CartProvider } from "./CartContext";
import Footer from "./Footer";
import Terms from "./Terms";
import Category from "./products/GetCategories";

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
            <Route path="/cat" component={Category}/>
            <Route path="/product:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/terms" component={Terms}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
          <Footer/>
        </CartProvider>
      </Router>
    </>
  );
}

export default AppRoute;
