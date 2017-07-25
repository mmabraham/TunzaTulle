import * as Util from '../util/dress_api_util';

export const RECEIVE_DRESSES = 'RECEIVE_DRESSES';

export const receiveDresses = dresses => {
  return {
    type: RECEIVE_DRESSES,
    dresses,
  }
}

export const fetchDresses = filters => dispatch => {
  Util.fetchDresses(filters)
    .then((dresses) => dispatch(receiveDresses(dresses)))
}
