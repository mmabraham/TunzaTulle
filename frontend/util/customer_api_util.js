export const fetchCustomers = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/customers',
    // data: { filters }
  })
}

export const fetchCustomer = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/customers/${id}`,
  })
}

export const createCustomer = customer => {
  return $.ajax({
    method: 'POST',
    url: `/api/customers`,
    data: { customer },
    error: res => console.log(res),
  })
}

export const updateCustomer = (customer, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/customers/${id}`,
    data: { customer },
  })
}
