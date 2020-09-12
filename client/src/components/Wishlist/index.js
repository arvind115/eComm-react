import React from "react";
import { connect } from "react-redux";

import "./Wishlist.css";

function Wishlist(props) {
  return (<div>
      {props.wishlistProds.map(id => <p>{id}</p>)}
  </div>);
}
function mapStateToProps(state, ownProps) {
  return {
    wishlistProds: state.wishlist,
  };
}

export default connect(mapStateToProps)(Wishlist);
