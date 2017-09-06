import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';
import * as moment from 'moment';

const OrderListItem = props => {
  return (
    <NavLink to={`/orders/${props.order.id}`}>
      <MenuItem primaryText={props.order.status}>
        <p>{moment.default(props.order.event_date).fromNow()} -
          {props.order && props.order.dress_ids.length} dresses - 
          {props.order && props.order.customer_name}
        </p>
      </MenuItem>
    </NavLink>
  )
}

export default OrderListItem;
