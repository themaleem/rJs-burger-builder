import axios from "axios";
import * as actionTypes from "./actionTypes";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (token,userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken:token,
    userId:userId
  };
};
const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZMCmpM9OGEo_g4YEV8-Xhd4h5i9ju6HA";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZMCmpM9OGEo_g4YEV8-Xhd4h5i9ju6HA";
    }
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFailed(err));
      });
  };
};
