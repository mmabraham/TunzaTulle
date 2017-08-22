import React from 'react';
import Paper from 'material-ui/Paper';

const CustomerDetail = ({customer}) => {
  debugger
  if (!customer) return null;
  return (
    <Paper>
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
    </Paper>
  )
}
 export default CustomerDetail;
