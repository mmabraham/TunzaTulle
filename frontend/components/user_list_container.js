import UserList from './user_list';
import { connect } from 'react-redux'
import { asArray } from '../reducers/selectors';
import { fetchUsers, authorizeUser, deleteUser } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    users: asArray(state.users),
    currentUser: state.session.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    authorize: (id, admin) => dispatch(authorizeUser(id, admin)),
    deleteUser: (id) => dispatch(deleteUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
