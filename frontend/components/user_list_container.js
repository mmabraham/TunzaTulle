import UserList from './user_list';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (id) => dispatch(fetchUsers(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
