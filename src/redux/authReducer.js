import { SIGNIN_USER, SIGNUP_USER, CLEAR_USER, LOGIN_FAILED } from './ActionTypes';
  
  const initialState = {
    user: null,
    isloggedIn: false,
    token: null,
    error: null
  };
  
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SIGNUP_USER:
        return {
          ...state,
          user: action.payload.result.userExist,
          token: action.payload.result.token,
          isloggedIn: true,
          error: null
        };
      case SIGNIN_USER:
        return {
          ...state,
          user: action.payload.result.userExist,
          token: action.payload.result.token,
          isloggedIn: true
        };
    case CLEAR_USER:
        return {
          ...state,
          user: null,
          isloggedIn: false,
          token: null
        };
      default:
        return state;
    }
  }