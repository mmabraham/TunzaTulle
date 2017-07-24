import { RECEIVE_ERRORS, RECEIVE_USER } from '../actions/session_actions';
// import { RECEIVE_DRESSES, RECIEVE_DRESS } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
    return action.errors;
    case RECEIVE_USER:
      return {};
    // case RECIEVE_DRESS:
    //   return {};
    // case RECEIVE_DRESSES:
    //   return {};
    default:
      return state;
  }
};

export default sessionReducer;
