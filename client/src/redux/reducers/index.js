import { combineReducers } from "redux";

import wishlist from "./wishlistReducer"; //actual name is productReducer in wishlistReducer.js
import cart from "./cartReducer"; //actual name is cartReducer in cartReducer.js
import user from "./userReducer"; //actual name is userReducer in userReducer.js

const rootReducer = combineReducers({
  wishlist,
  cart,
  user,
});

export default rootReducer;
