import React from 'react';
import List from 'material-ui/List/List';
import UserListItem from './user_list_item';

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users.map(user => (<UserListItem user={user} key={user.id}/>))
    return (
      <List>
        {users}
      </List>
  )
  }
}
