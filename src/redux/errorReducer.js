import { GET_ERRORS, CLEAR_ERRORS } from './ActionTypes';

const initialState = {
  msg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload
      };
    case CLEAR_ERRORS:
      return {
        msg: null
      };
    default:
      return state;
  }
}