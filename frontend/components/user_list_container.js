import UserList from './user_list';
import { connect } from 'react-redux'
import { asArray } from '../reducers/selectors';
import { fetchUsers } from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    users: asArray(state.users),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
