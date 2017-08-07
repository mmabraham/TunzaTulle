export const fetchOrders = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/orders',
    // data: { filters }
  })
}

export const fetchOrder = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/orders/${id}`,
  })
}

export const createOrder = order => {
  return $.ajax({
    method: 'POST',
    url: `/api/order`,
    data: { order },
    error: res => console.log(res),
  })
}
