import { RECEIVE_CUSTOMERS, RECEIVE_CUSTOMER } from '../actions/customer_actions';

const customersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CUSTOMER:
      return Object.assign({}, state, action.customer);
    case RECEIVE_CUSTOMERS:
      return action.customers;
    default:
      return state;
  }
};

export default customersReducer;
