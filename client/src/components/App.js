import React, { Component, memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Navbar from "./common/Navbar";
import ProductList from "./products/ProductList";
import CartDetail from "./cart/CartDetail";
import Err404 from "./common/Err404";

import Login from "./Login";
import Register from "./Register";

import Facebook from "./OAuth/Facebook";
import Google from "./OAuth/Google";

import CheckoutPage from "./checkout/CheckoutPage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/cart" component={CartDetail} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/auth/google" component={Google} />
            <Route exact path="/auth/facebook" component={Facebook} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route component={Err404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default memo(App);
