import * as types from "./actionTypes";

export function loadProductsSuccess(products) {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products,
  };
}

export function loadProducts() {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:8080/api/v1/products");
      const products = await response.json();
      dispatch(loadProductsSuccess(products));
    } catch (err) {
      throw err;
    }
  };
}

export function heartProduct(id) {
  return function (dispatch) {
    dispatch({
      type: types.HEART_THE_PRODUCT,
      id,
    });
  };
}

export function unHeartProduct(id) {
  return function (dispatch) {
    dispatch({
      type: types.UNHEART_THE_PRODUCT,
      id,
    });
  };
}
