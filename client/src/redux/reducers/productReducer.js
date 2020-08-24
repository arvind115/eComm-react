import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function productReducer(
  products = initialState.products,
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    case types.ADD_PRODUCT_TO_CART:
      return products.map((product) =>
        product._id === action.product._id
          ? { ...product, inCart: true }
          : product
      );
    case types.REMOVE_PRODUCT_FROM_CART:
      return products.map((product) =>
        product._id === action.product._id
          ? { ...product, inCart: false }
          : product
      );
    case types.HEART_THE_PRODUCT:
      return products.map((product) =>
        product._id === action.product._id
          ? { ...product, heart: true }
          : product
      );
    case types.UNHEART_THE_PRODUCT:
      return products.map((product) =>
        product._id === action.product._id
          ? { ...product, heart: false }
          : product
      );
    default:
      return products;
  }
}
