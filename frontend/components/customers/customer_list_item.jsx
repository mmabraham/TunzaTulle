import React from 'react';
import MenuItem from 'material-ui/MenuItem';

const CustomerListItem = props => {
  return (
      <MenuItem
        primaryText={`${props.customer.name}  -  ${props.customer.email}`}
        value={props.customer.id}
      />
  )
}

export default CustomerListItem;
