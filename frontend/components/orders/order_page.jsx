import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { NavLink } from 'react-router-dom';
import ConfirmDialog from '../confirm_dialog';
import * as moment from 'moment';
import CustomerDetail from '../customers/customer_detail';
import DressListItem from '../dresses/dress_list_item';

export default class OrderPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchOrder();
  }

  render() {
    if (!this.props.order || !this.props.order.dresses) return null;
    const order = this.props.order;
    order.customer.withoutOrders = true;
    const dresses = order.dresses;
    const totalPrice = order.dresses.reduce((sum, dress) => sum + parseInt(dress.price, 10), 0)
    return (
      <Card style={{width: '80%', padding: 30}}>
        <CardHeader
          title={order.id}
          subtitle={order.status}
        />
        <CardTitle
          title={`${new Date(order.start_date).toDateString()} - ${new Date(order.end_date).toDateString()}`}
          subtitle={`Total Price: $ ${parseInt(totalPrice / 100, 10)}.${parseInt(totalPrice % 100, 10)}`}
        />
      <CardTitle title={order.status} subtitle={moment.default(order.event_date).fromNow()} />
        <CustomerDetail customer={order.customer}/>
        <CardActions>
          <NavLink to={`/orders/edit/${order.id}`} >
            <FlatButton label="Edit this order" />
          </NavLink>
          <ConfirmDialog text="Delete this order" onConfirm={this.props.deleteOrder}/>
        </CardActions>
        <h1>Dresses</h1>
        {dresses.map(dress => (<DressListItem dress={dress} key={dress.id} />))}
      </Card>
    )
  }
}
