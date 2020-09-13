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
      const index = wishlist.findIndex((prod) => prod._id === action.product._id);
      return index === -1 ? [...wishlist, action.product] : wishlist;
    
      case types.UNHEART_THE_PRODUCT:
      return wishlist.filter((prod) => prod._id !== action.product._id);
    
      default:
      return wishlist;
  }
}
