import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Cart from "../../common/Cart";
import "./CartIcon.css";

function CartIcon(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/cart");
  };
  return (
    <div className="cartNav" onClick={handleClick}>
      <div className="cartNavDiv">
        <Cart inCart={props.noOfProducts > 0 ? "royalblue" : false} />
      </div>
      <div className="noOfItems">{props.noOfProducts}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    noOfProducts: state.cart.length,
  };
}

export default connect(mapStateToProps)(CartIcon);
