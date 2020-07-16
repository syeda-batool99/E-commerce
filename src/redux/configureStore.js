import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import errorReducer from './errorReducer';
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import mouseReducer from "./mouseReducer";
import mousepadReducer from "./mousepadReducer";
import keyboardReducer from "./keyboardReducer";


export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        user:authReducer,
        error: errorReducer,
        product: productReducer,
        mouse: mouseReducer,
        keyboard: keyboardReducer,
        mousepad: mousepadReducer,
    }),
        applyMiddleware(thunk, logger)
    );
    return store;
}