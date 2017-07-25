import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const UserListItem = props => {
  return (
    <TableRow>
      <TableRowColumn>{props.user.username}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton
          primary={true}
          disabled={props.user.admin}
          label="Authorize"
          onTouchTap={id => props.authorize(props.user.id, true)}
        />

        <RaisedButton
          secondary={true}
          disabled={!props.user.admin}
          label="Block"
          onTouchTap={id => props.authorize(props.user.id, false)}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default UserListItem;
