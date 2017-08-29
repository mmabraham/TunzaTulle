export const fetchOrders = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/orders',
    data: filters
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
    url: `/api/orders`,
    data: { order },
    error: res => console.log(res),
  })
}

export const updateOrder = (order, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/orders/${id}`,
    data: { order },
    error: res => console.log(res),
  })
}

export const deleteOrder = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/orders/${id}`,
  })
}
