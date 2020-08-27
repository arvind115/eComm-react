import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function cartReducer(cart = initialState.cart, action) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      const index = cart.findIndex(
        (product) => product._id === action.product._id
      );
      if (index === -1) {
        return [...cart, action.product];
      }
      return cart;
    case types.REMOVE_PRODUCT_FROM_CART:
      return cart.filter((product) => product._id !== action.product._id);
    default:
      return cart;
  }
}
