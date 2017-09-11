import * as Util from '../util/dress_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_DRESSES = 'RECEIVE_DRESSES';
export const RECEIVE_DRESS = 'RECEIVE_DRESS';

export const receiveDresses = dresses => {
  return {
    type: RECEIVE_DRESSES,
    dresses,
  }
}

export const receiveDress = dress => {
  return {
    type: RECEIVE_DRESS,
    dress,
  }
}

export const fetchDresses = filters => dispatch => {
  return Util.fetchDresses(filters)
    .then((dresses) => dispatch(receiveDresses(dresses)))
}

export const fetchDress = id => dispatch => {
  return Util.fetchDress(id)
    .then((dress) => dispatch(receiveDress(dress)))
}

export const createDress = dress => dispatch => {
  return Util.createDress(dress)
    .error(({responseJSON}) => dispatch(receiveErrors(responseJSON || {})))
}

export const updateDress = (dress, id) => dispatch => {
  return Util.updateDress(dress, id)
    .error(({responseJSON}) => dispatch(receiveErrors(responseJSON || {})))

}

export const deleteDress = id => dispatch => {
  return Util.deleteDress(id)
}
