import * as types from "./actionTypes";

export function setUserData(userData) {
  return function (dispatch) {
    dispatch({
      type: types.SET_USER_DATA,
      userData,
    });
  };
}

export function getUserData() {
  return function (dispatch) {
    dispatch({
      type: types.GET_USER_DATA,
    });
  };
}

export function clearUserData() {
  return function (dispatch) {
    dispatch({ type: types.CLEAR_USER_DATA });
  };
}
