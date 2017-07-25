import UserList from './user_list';
import { connect } from 'react-redux'
import { asArray } from '../reducers/selectors';
import { fetchUsers, authorizeUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    users: asArray(state.users),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    authorize: (id, admin) => dispatch(authorizeUser(id, admin)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
