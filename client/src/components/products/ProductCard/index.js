import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../redux/actions/cartActions";

import {
  heartProduct,
  unHeartProduct,
} from "../../../redux/actions/wishlistActions";
import Heart from "../../common/Heart";
import CartSvg from "../../common/CartSvg";

import "./ProductCard.css";

export class ProductCard extends Component {
  handleCart = () => {
    console.log("cart clicked..");
    this.props.inCart
      ? this.props.removeProductFromCart(this.props)
      : this.props.addProductToCart(this.props);
  };

  handleHeart = () => {
    this.props.setHeartClicked(true);
    if (this.props.loggedIn) {
      this.props.heart
        ? this.props.unHeartProduct(this.props)
        : this.props.heartProduct(this.props);
    }
  };

  render() {
    const { img, inCart, heart, _id } = this.props;
    const actualprice = this.props["actual-price"];
    const name = this.props["product-name"];
    return (
      <div className="cardDiv">
        <div className="upper">
          <div className="heartDiv">
            <Heart
              fill={heart && this.props.loggedIn ? "red" : "grey"}
              onClick={this.handleHeart}
            />
          </div>
          <Link to={`${window.location.pathname}/${_id}`}>
            <img src={img} className="first-image" alt="" />
          </Link>
        </div>
        <div className="lower">
          <div className="flatRow prodName">{name}</div>
          <div className="flatRow">{actualprice}</div>
          <div className="cartDiv" onClick={this.handleCart}>
            <CartSvg inCart={inCart} handleClick={this.handleCart} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }, ownProps) {
  return {
    loggedIn: user.name !== undefined,
    ownProps,
  };
}

const mapDispatchToProps = {
  addProductToCart,
  removeProductFromCart,
  heartProduct,
  unHeartProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
