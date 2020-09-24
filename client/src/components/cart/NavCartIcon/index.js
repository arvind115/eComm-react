import React from "react";
import { connect } from "react-redux";
import CartSvg from "../../common/CartSvg";
import "./CartIcon.css";

function NavCartIcon(props) {
  return (
    <>
      <CartSvg
        inCart={props.noOfProducts > 0 ? "royalblue" : false}
        className={props.className}
      />
      <div className="itemHolder">{props.noOfProducts}</div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    noOfProducts: state.cart.length,
  };
}

export default connect(mapStateToProps)(NavCartIcon);
