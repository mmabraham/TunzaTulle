import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

const OrderListItem = props => {
  return (
    <NavLink to={`/orders/${props.order.id}`}>
      <MenuItem primaryText={props.order.start_date}>
        <p>{props.order && props.order.dress_ids.length}</p>
      </MenuItem>
    </NavLink>
  )
}

export default OrderListItem;
