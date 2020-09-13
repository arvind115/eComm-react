import React from "react";
import { connect } from "react-redux";
import { unHeartProduct } from "../../redux/actions/wishlistActions";

import "./Wishlist.css";
import Row from "../common/Row";
import Heart from "../common/Heart";

function Wishlist(props) {
  return (
    <div>
      {props.wishlistProds.length ? (
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
            {props.wishlistProds.map((prod, ind) => (
              <Row
                key={prod._id}
                no={ind + 1}
                {...prod}
                icon={Heart}
                iconClick={props.unHeartProduct}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products wishlisted..</p>
      )}
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    wishlistProds: state.wishlist,
  };
}

const mapDispatchToProps = {
  unHeartProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
