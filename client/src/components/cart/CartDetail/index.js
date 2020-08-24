import React, { Component } from "react";
import { connect } from "react-redux";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

import Row from "./Row";

export class CartDetail extends Component {
  render() {
    return (
      <div>
        {this.props.cartProducts.length === 0 ? (
          "NO products selected"
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Img</th>
                  <th scope="col">Product</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartProducts.length > 0 &&
                  this.props.cartProducts.map((product, ind) => (
                    <Row
                      no={ind + 1}
                      {...product}
                      trash={this.props.removeProductFromCart}
                      key={product._id}
                    />
                  ))}
              </tbody>
            </table>
            Total : {this.props.total}
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return {
    cartProducts: cart,
    total: cart
      .map((prod) => parseInt(prod["actual-price"].match(/\d+/g)[0]))
      .reduce((sum, val) => sum + val, 0),
  };
}

const mapDispatchToProps = {
  removeProductFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
