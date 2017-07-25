import { RECEIVE_DRESSES, RECIEVE_DRESS } from '../actions/dress_actions';

const dressesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_DRESS:
      return Object.assign({}, state, action.dress);
    case RECEIVE_DRESSES:
      return action.dresses;
    default:
      return state;
  }
};

export default dressesReducer;
