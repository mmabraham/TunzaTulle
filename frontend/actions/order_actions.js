import * as Util from '../util/order_api_util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

export const receiveOrders = ({orders}) => {
  return {
    type: RECEIVE_ORDERS,
    orders,
  }
}

export const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order,
  }
}

export const fetchOrders = filters => dispatch => {
  return Util.fetchOrders(filters)
    .then((orders) => dispatch(receiveOrders(orders)))
}

export const fetchOrder = id => dispatch => {
  return Util.fetchOrder(id)
    .then((order) => dispatch(receiveOrder(order)))
}

export const createOrder = order => dispatch => {
  return Util.createOrder(order)
}

export const updateOrder = (order, id) => dispatch => {
  return Util.updateOrder(order, id)
}

export const deleteOrder = id => dispatch => {
  return Util.deleteOrder(id)
}
