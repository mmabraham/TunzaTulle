import React from 'react';
import { Table, TableBody } from 'material-ui/Table';
import UserListItem from './user_list_item';

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users.map(user => (
      <UserListItem
        currentUser={this.props.currentUser}
        user={user}
        key={user.id}
        authorize={this.props.authorize}
      />
    ))
    return (
      <Table>
        <TableBody>
          {users}
        </TableBody>
      </Table>
  )
  }
}
