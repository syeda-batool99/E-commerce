import { SIGNIN_USER, SIGNUP_USER, CLEAR_USER, GET_USER } from './ActionTypes';
  
  const initialState = {
    user: null,
    isloggedIn: false
  };
  
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SIGNUP_USER:
        return {
          ...state,
          user: action.payload.result.userExist,
          isloggedIn: true
        };
      case SIGNIN_USER:
        return {
          ...state,
          user: action.payload.result.userExist,
          isloggedIn: true
        };
    case CLEAR_USER:
        return {
          ...state,
          isloggedIn: false
        };
      default:
        return state;
    }
  }