import { RECEIVE_DRESSES } from '../actions/dress_actions';

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECIEVE_DRESS:
    //   return {};
    case RECEIVE_DRESSES:
      return action.dresses;
    default:
      return state;
  }
};

export default sessionReducer;
