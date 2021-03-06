import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import ConfirmDialog from '../confirm_dialog';

const UserListItem = props => {
  const user = props.user;
  return (
    <TableRow>
      <TableRowColumn>{user.username}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton
          primary={true}
          disabled={props.currentUser.id === user.id || user.admin}
          label="Authorize"
          onTouchTap={id => props.authorize(user.id, true)}
        />

        <RaisedButton
          secondary={true}
          disabled={props.currentUser.id === user.id || !user.admin}
          label="Block"
          onTouchTap={id => props.authorize(user.id, false)}
        />
      </TableRowColumn>
      <TableRowColumn>
        <ConfirmDialog text="Delete" onConfirm={props.deleteUser}/>
      </TableRowColumn>
    </TableRow>
  )
}

export default UserListItem;
