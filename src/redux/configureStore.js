import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import errorReducer from './errorReducer';
import {reducer as formReducer} from "redux-form";
import authReducer from './authReducer';
import productReducer from "./productReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            error: errorReducer,
            auth: authReducer,
            product: productReducer,
            form: formReducer
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}