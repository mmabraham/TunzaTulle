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

export const createDress = dress => {
  return $.ajax({
    method: 'POST',
    url: `/api/dresses`,
    data: { dress },
    error: res => console.log(res),
  })
}

export const updateDress = (dress, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/dresses/${id}`,
    data: { dress },
    error: res => console.log(res),
  })
}

export const deleteDress = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/dresses/${id}`,
  })
}
