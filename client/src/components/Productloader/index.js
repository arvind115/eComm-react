import React, { Component } from "react";
import { connect } from "react-redux";

import ProductCard from "../products/ProductCard";
import Loader from "../common/Loader";

class ProductLoader extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }
  async componentDidMount() {
    console.log("mounted..");
    const res = await fetch(
      `http://localhost:8080/api/v1/products=${this.props.collection}`
    );
    const js = await res.json();
    console.log(js);
    this.setState({ products: js, loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          this.state.products.map((product) => (
            <ProductCard
              key={product._id}
              {...product}
              inCart={this.props.cart.some((prod) => prod._id === product._id)}
              heart={this.props.wishlist.some((id) => id === product._id)}
            />
          ))
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    wishlist: state.wishlist,
  };
}

export default connect(mapStateToProps)(ProductLoader);
