export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
  })
}

export const authorizeUser = (id, admin) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { admin },
  })
}
