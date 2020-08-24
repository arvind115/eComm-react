import * as types from "./actionTypes";

export function addProductToCart(product) {
  return function (dispatch) {
    dispatch({
      type: types.ADD_PRODUCT_TO_CART,
      product,
    });
  };
}

export function removeProductFromCart(product) {
  return function (dispatch) {
    dispatch({
      type: types.REMOVE_PRODUCT_FROM_CART,
      product,
    });
  };
}
