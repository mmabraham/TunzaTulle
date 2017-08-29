import React from 'react';
import Paper from 'material-ui/Paper';
import OrderList from '../orders/order_list_container';

const CustomerDetail = ({customer}) => {
  if (!customer) return null;

  const style = {
    width: '400px',
    // height: '350px',
    margin: '20px',
    padding: '20px',
    zIndex: 1,
    position: 'fixed',
    right: '0',
    textAlign: 'center',
  }
  return (
    <Paper style={style} zDepth={5} >
      <p>{customer.id}</p>
      <br />
      <p>{customer.name}</p>
      <br />
      <p>{customer.email}</p>
      <br />
      <p>{customer.phone_number}</p>
      <br />
      <p>{customer.address}</p>
      <br />
      <p>{customer.notes}</p>
      <br />
      <OrderList customerId={customer.id}/>
    </Paper>
  )
}
 export default CustomerDetail;
