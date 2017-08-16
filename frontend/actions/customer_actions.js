import * as Util from '../util/customer_api_util';

export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';

export const receiveCustomers = ({customers}) => {
  return {
    type: RECEIVE_CUSTOMERS,
    customers,
  }
}

export const receiveCustomer = customer => {
  return {
    type: RECEIVE_CUSTOMER,
    customer,
  }
}

export const fetchCustomers = filters => dispatch => {
  return Util.fetchCustomers(filters)
    .then((customers) => dispatch(receiveCustomers(customers)))
}

export const fetchCustomer = id => dispatch => {
  return Util.fetchCustomer(id)
    .then((customer) => dispatch(receiveCustomer(customer)))
}

export const createCustomer = customer => dispatch => {
  return Util.createCustomer(customer)
}
