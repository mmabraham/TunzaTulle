import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { NavLink } from 'react-router-dom';
import ConfirmDialog from '../confirm_dialog';
import OrderList from '../orders/order_list';
import { byEventDate } from '../../reducers/selectors';

export default class DressPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDress();
  }

  render() {
    const dress = this.props.dress;
    return !dress ? (null) : (
      <Card style={{width: '70%', margin: 'auto'}}>
        <CardHeader
          title={dress.title}
          subtitle={dress.barcode}
        />
        <CardMedia
          overlay={
            <CardTitle
              title={`waist: ${dress.waist} -  - height: ${dress.height}`}
              subtitle={`sleeve length: ${dress.sleeve_length} - - age: ${dress.age}`}
            />
          }
        >
          <img src={dress.img} alt={dress.description} />
        </CardMedia>
        <CardTitle title={dress.title} subtitle={dress.color} />
        <CardText>
          {dress.description}
        </CardText>
        <CardActions>
          <NavLink to={`/dresses/edit/${dress.id}`}>
            <FlatButton label="Edit" />
          </NavLink>
          <ConfirmDialog text="Delete" onConfirm={this.props.deleteDress}/>
          <NavLink to={`/orders/new/${dress.id}`}>
            <FlatButton label="Create Order" />
          </NavLink>
        </CardActions>
        <h1 style={{textAlign: 'center'}}>Orders</h1>
        <OrderList orders={byEventDate(dress.orders)} />
      </Card>
    )
  }
}
