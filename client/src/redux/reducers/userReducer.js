import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function userReducer(userData = initialState.userData, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return action.userData;
    case types.CLEAR_USER_DATA:
      return {};
    default:
      return userData;
  }
}
