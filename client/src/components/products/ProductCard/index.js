import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../redux/actions/cartActions";

import {
  heartProduct,
  unHeartProduct,
} from "../../../redux/actions/productActions";

import Heart from "../../common/Heart";

export class ProductCard extends Component {
  state = {
    loading: true,
    heart: false,
  };
  imageLoaded = () => {
    this.setState({ loading: false });
  };

  handleClick = () => {
    this.props.inCart === undefined || this.props.inCart === false
      ? this.props.addProductToCart(this.props)
      : this.props.removeProductFromCart(this.props);
  };

  handleHeart = () => {
    this.props.heart === undefined || this.props.heart === false
      ? this.props.heartProduct(this.props)
      : this.props.unHeartProduct(this.props);
  };

  render() {
    const { brand, img, sizes, discount, inCart, heart } = this.props;
    const actualprice = this.props["actual-price"];
    const name = this.props["product-name"];
    return (
      <div>
        {this.loading ? (
          <p>loading...</p>
        ) : (
          <img
            src={img}
            alt="product"
            style={{ height: "300px", width: "300px" }}
            onLoad={this.imageLoaded}
          />
        )}{" "}
        <Heart
          fill={heart === true ? "red" : "blue"}
          onClick={this.handleHeart}
        />
        Brand: <b>{brand}</b>
        Name: <b>{name}</b>
        Sizes:{" "}
        {sizes.map((size) => (
          <i key={size}>{size}</i>
        ))}{" "}
        Discount: <b>{discount === true ? "yes" : "no"}</b>
        Price: <b>{actualprice}</b>
        <button onClick={this.handleClick}>
          {inCart === undefined || inCart === false ? (
            <p>Add to Cart</p>
          ) : (
            <p>Remove from cart</p>
          )}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return ownProps;
}

const mapDispatchToProps = {
  addProductToCart,
  removeProductFromCart,
  heartProduct,
  unHeartProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
