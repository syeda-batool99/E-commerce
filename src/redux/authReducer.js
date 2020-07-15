import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './ActionTypes';
  
  const initialState = {
    token: null,
    isAuthenticated: null,
    user: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          token:action.payload.token,
          isAuthenticated: true
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false
        };
      default:
        return state;
    }
  }