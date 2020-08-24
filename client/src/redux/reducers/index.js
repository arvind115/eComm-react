import { combineReducers } from "redux";

import products from "./productReducer"; //actual name is productReducer in productReducer.js
import cart from "./cartReducer"; //actual name is cartReducer in cartReducer.js
import user from "./userReducer"; //actual name is userReducer in userReducer.js

const rootReducer = combineReducers({
  products,
  cart,
  user,
});

export default rootReducer;
