
import { SIGNIN_USER, SIGNUP_USER, CLEAR_USER, GET_USER } from './ActionTypes';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const register = (userData) => (dispatch) => {

  const newUser = JSON.stringify(userData);
  console.log("THISSS" + newUser)

  return fetch(`http://localhost:3001/auth/signup`, {
        method: "POST",
        body: newUser,
        headers : {"Content-Type": "application/json"}
    })
  .then(response => response.json())
    .then(user => {
      dispatch({
        type: SIGNUP_USER, 
        payload: user
      });; dispatch(getUser(user)) }
    )
    .catch(err =>
      dispatch(returnErrors(err.message))
    );
};

export const signin = (email, password) => (dispatch) => {

  const user= {email, password}
  console.log("HELLO" + email + password)
  return fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers : {"Content-Type": "application/json"}
    })
  .then(response => response.json())
  .then(user => {
      dispatch({
        type: SIGNIN_USER, 
        payload: user
      }); dispatch(getUser(user))}
    )
  .catch(err =>
      dispatch(returnErrors(err.message))
    );
};

export const getUser = (details) => (dispatch) => {
    dispatch({
      type: GET_USER,
      payload: details
    })
}

export const logout = () => (dispatch) => {

  dispatch({
    type: CLEAR_USER,
    payload: null
  })
};
