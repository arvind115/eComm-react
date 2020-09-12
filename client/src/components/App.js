import React, { Component, memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import Home from "../components/Home";
import Nav2 from "./common/Navbar2";
import ProductList from "./products/ProductList";
import CartDetail from "./cart/CartDetail";
import Err404 from "./common/Err404";

import Facebook from "./OAuth/Facebook";
import Google from "./OAuth/Google";

import CheckoutPage from "./checkout/CheckoutPage";

import ProductLoader from "./Productloader";
import ProductDetail from "./ProductDetail";
import SlideShow from "../components/SlideShow";

import Wishlist from "../components/Wishlist";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav2 />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/cart" component={CartDetail} />
            <Route exact path="/auth/google" component={Google} />
            <Route exact path="/auth/facebook" component={Facebook} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/nav" component={Nav2} />
            <Route exact path="/slideshow" component={SlideShow} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route
              exact
              path="/:collection"
              component={(props) => {
                console.log(props);
                return (
                  <ProductLoader collection={props.match.params.collection} />
                );
              }}
            />
            <Route
              exact
              path="/:collection/:id"
              component={(props) => {
                console.log(props);
                return (
                  <ProductDetail
                    collection={props.match.params.collection}
                    id={props.match.params.id}
                  />
                );
              }}
            />
            <Route component={Err404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default memo(App);
