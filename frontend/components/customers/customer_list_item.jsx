import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

const CustomerListItem = props => {
  return (
    <NavLink to={`/customers/${props.customer.id}`}>
      <MenuItem primaryText={props.customer.name}>
        <p>
          {props.customer.email}
        </p>
      </MenuItem>
    </NavLink>
  )
}

export default CustomerListItem;
