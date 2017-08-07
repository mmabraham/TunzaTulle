import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../actions/order_actions';

const ordersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ORDER:
      return Object.assign({}, state, action.order);
    case RECEIVE_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export default ordersReducer;
