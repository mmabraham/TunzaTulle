import React from 'react';
import OrderListItem from './order_list_item';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchOrders && this.props.fetchOrders();
  }

  render() {
    if (!this.props.orders) return null;
    const orders = this.props.orders.map(order => (
      <OrderListItem
        order={order}
        key={order.id}
      />
    ))
    return (
      <Paper className="order-list-page">
        <Menu>{orders}</Menu>
      </Paper>
    )
  }
 }
