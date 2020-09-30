import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginRouter from "../HOC/LoginRouter";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Google from "../OAuth/Google";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_QcT5HsC0UoTP1xRhqbC87uFF009NUrh426");

export function CheckoutPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 offset-md-3">
          <Elements stripe={stripePromise} total={200}>
            <CheckoutForm total={100} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

const GuardedRoute = ({ loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <CheckoutPage {...props} />
      ) : (
        <LoginRouter previous="/checkout" component={Google} {...props} />
      )
    }
  />
);

function mapStateToProps({ user }) {
  return {
    loggedIn: user.name !== undefined,
  };
}

export default connect(mapStateToProps)(GuardedRoute);
