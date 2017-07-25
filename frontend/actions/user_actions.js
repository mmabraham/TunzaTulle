import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = users =>  {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export const fetchUsers = () => dispatch => {
  return ApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
}

export const authorizeUser = (id, admin) => dispatch => {
  return ApiUtil.authorizeUser(id, admin)
    .then(users => dispatch(receiveUsers(users)))
}
