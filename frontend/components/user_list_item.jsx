import React from 'react';
import ListItem from 'material-ui/List/ListItem';

const UserListItem = props => {
  return (
    <ListItem>
      {props.user.username}
    </ListItem>
  )
}

export default UserListItem;
