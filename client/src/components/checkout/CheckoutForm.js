import React, { Component } from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import CardSection from "./CardSection";

class CheckoutForm extends Component {
  state = {
    paymentDone: false,
    paymentFailed: false,
  };
  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements, amount } = this.props;

    if (!stripe || !elements || !amount) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // get JWT access_token from 'cache' here & include in Blob
    const access_token = sessionStorage.getItem("jwt");
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token, amount }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default",
    };
    const paymentIntent = await fetch(
      `http://localhost:8080/api/v1/getintent/`,
      options
    );

    const { client_secret } = await paymentIntent.json();

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      this.setState({ paymentFailed: true });
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        console.log("payment done..");
        this.setState({ paymentDone: true });
        console.log(result);
      }
    }
  };

  render() {
    return (
      <>
        {this.state.paymentDone ? (
          <div className="alert alert-success" role="alert">
            Your payment of {this.props.amount} was successfull!
          </div>
        ) : (
          ""
        )}
        {this.state.paymentFailed ? (
          <div class="alert alert-danger" role="alert">
            Your payment attemp failed! Please try again.
          </div>
        ) : (
          ""
        )}
        {this.props.amount > 0 ? (
          <form onSubmit={this.handleSubmit}>
            <CardSection />
            <br />
            <div className="badge badge-primary">Amount :</div>&nbsp; 
            <small>{this.props.amount}</small>
            <br />
            <button disabled={!this.props.stripe} className="btn btn-sm btn-success">Confirm order</button>
          </form>
        ) : (
          <p>No product added to cart yet</p>
        )}
      </>
    );
  }
}

export function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => {
        return (
          <CheckoutForm
            stripe={stripe}
            elements={elements}
            amount={props.amount}
          />
        );
      }}
    </ElementsConsumer>
  );
}

function mapStateToProps({ cart }) {
  return {
    amount: cart
      .map((prod) => parseInt(prod["actual-price"].match(/\d+/g)[0]))
      .reduce((sum, val) => sum + val, 0),
  };
}

export default connect(mapStateToProps)(InjectedCheckoutForm);
