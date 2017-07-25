import { RECEIVE_DRESSES, RECEIVE_DRESS } from '../actions/dress_actions';

const dressesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DRESS:
      return Object.assign({}, state, action.dress);
    case RECEIVE_DRESSES:
      return action.dresses;
    default:
      return state;
  }
};

export default dressesReducer;
