export const fetchUsers = id => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { id },
  })
}
