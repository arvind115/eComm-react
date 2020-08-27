import React, { Component, memo } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../redux/actions/wishlistActions";

import ProductCard from "./ProductCard";
import Loader from "../common/Loader";

export class ProductList extends Component {
  async componentDidMount() {
    const { loadProducts } = this.props;
    if (this.props.products.length < 1) {
      await loadProducts();
    }
  }
  render() {
    return (
      <div>
        {!this.props.products.length ? (
          <Loader />
        ) : (
          this.props.products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  loadProducts,
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(ProductList));
