export const fetchDresses = filters => {
  return $.ajax({
    method: 'GET',
    url: '/api/dresses',
    data: { filters }
  })
}
