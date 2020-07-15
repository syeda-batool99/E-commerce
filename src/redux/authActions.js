import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './ActionTypes';
  import {returnErrors} from "./errorActions";

  export const register = (username, email, password ) => (dispatch) => {
    const newUser = {
        username: username,
        email: email,
        password: password
    };
    return fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
      .then(response =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response, err.response, 'REGISTER_FAIL')
        );
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };

export const login = ( email, password ) => (dispatch) => {

    const UserExist = {
        email: email,
        password: password
    };
    
    return fetch("http://localhost:3001/auth/login", {
        method: "POST",
        body: JSON.stringify(UserExist),
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
      .then(response =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };