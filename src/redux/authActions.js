
import { SIGNIN_USER, SIGNUP_USER, CLEAR_USER, GET_USER } from './ActionTypes';
// import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const register = (userData) => (dispatch) => {

  const newUser = JSON.stringify(userData);
  
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
      }) }
    )
    .catch(err =>
      dispatch(returnErrors(err.message))
    );
};

export const signin = (email, password) => (dispatch) => {

  const user= {email, password}
 
  return  fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers : {"Content-Type": "application/json"}
    })
  .then((response) => {
    console.log("then 1") 
    response.json()})
  .then(user => {
      dispatch({
        type: SIGNIN_USER, 
        payload: user
      })
      console.log("THEN 2")
   }
    )
  .catch((err) =>{
  console.log("CATCH")
      dispatch(returnErrors(err.message))}
    );
};


export const logout = () => (dispatch) => {

  dispatch({
    type: CLEAR_USER
  })
};
