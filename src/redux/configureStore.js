import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Cookie from 'js-cookie';
import errorReducer from './errorReducer';
import {
    userSigninReducer,
    userRegisterReducer
  } from './authReducer';
import productReducer from "./productReducer";
import mouseReducer from "./mouseReducer";
import keyboardReducer from "./keyboardReducer";

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    userSignin: { userInfo },
  };

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    error: errorReducer,
    product: productReducer,
    mouse: mouseReducer,
    keyboard: keyboardReducer
})

export const ConfigureStore = () => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
    return store;
}