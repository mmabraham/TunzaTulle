import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

import OrderListItem from './order_list_item';
import FilterButtons from '../search/filter_buttons';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchOrders && this.props.fetchOrders();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customerId != nextProps.customerId) {
      this.props.fetchOrders && this.props.fetchOrders();
    }
  }

  render() {
    if (!this.props.orders || !this.props.orders.length) return (<LinearProgress />);
    const orders = this.props.orders.map(order => (
      <OrderListItem
        order={order}
        key={order.id}
      />
    ))
    return (
      <Paper className="order-list-page">
        <FilterButtons
          filters={['pending', 'approved', 'shipped', 'returned', 'canceled']}
          onChange={console.log}
        />
        <Menu>{orders}</Menu>
      </Paper>
    )
  }
 }
