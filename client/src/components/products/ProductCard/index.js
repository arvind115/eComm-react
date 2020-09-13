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
import Cart from "../../common/Cart";

import "./ProductCard.css";

export class ProductCard extends Component {
  handleClick = () => {
    this.props.inCart
      ? this.props.removeProductFromCart(this.props)
      : this.props.addProductToCart(this.props);
  };

  handleHeart = () => {
    this.props.heart
      ? this.props.unHeartProduct(this.props)
      : this.props.heartProduct(this.props);
  };

  render() {
    // discount
    const { brand, img, sizes, inCart, heart, _id } = this.props;
    const actualprice = this.props["actual-price"];
    const name = this.props["product-name"];
    return (
      <div className="card">
        <div className="upper">
          <div className="heartDiv">
            <Heart
              fill={heart === true ? "red" : "grey"}
              onClick={this.handleHeart}
            />
          </div>
          <Link to={`${window.location.pathname}/${_id}`}>
            <img src={img} className="first-image" alt="" />
          </Link>
        </div>
        <div className="lower">
          <div className="sizeCart">
            <div className="sizeDiv">Size : {sizes.map((size) => size)}</div>
            <div className="cartDiv" onClick={this.handleClick}>
              <Cart inCart={inCart} handleClick={this.handleClick} />
            </div>
          </div>
          <div className="nameBrand">
            <div className="prodName">{name}</div>
            <div className="brandName">
              <strong>{brand}</strong>
              <span className="badge badge-pill badge-primary price">
                {actualprice}
              </span>
              {inCart ? (
                <span className="badge badge-pill badge-primary incart-pill">
                  In Cart
                </span>
              ) : (
                ``
              )}
            </div>
          </div>
        </div>
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
