import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function wishlistReducer(
  wishlist = initialState.wishlist,
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.wishlist;
    case types.HEART_THE_PRODUCT:
      const index = wishlist.findIndex((id) => id === action.id);
      return index === -1 ? [...wishlist, action.id] : wishlist;
    case types.UNHEART_THE_PRODUCT:
      return wishlist.filter((id) => id !== action.id);
    default:
      return wishlist;
  }
}
