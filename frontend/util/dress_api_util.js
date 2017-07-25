export const fetchDresses = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/dresses',
    data: { filters }
  })
}

export const fetchDress = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/dresses/${id}`,
  })
}
