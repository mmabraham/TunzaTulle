import * as ApiUtil from '../util/user_api_util';

export const RECIEVE_USERS = 'RECIEVE_USERS';

export const recieveUsers = users =>  {
  return {
    type: RECIEVE_USERS,
    users,
  }
}

export const fetchUsers = () => dispatch => {
  return ApiUtil.fetchUsers().then(users => dispatch(recieveUsers(users)));
}
