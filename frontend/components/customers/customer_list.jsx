import React from 'react';
import CustomerListItem from './customer_list_item';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

export default class CustomersList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchCustomers && this.props.fetchCustomers();
  }

  render() {
    if (!this.props.customers) return null;
    const customers = this.props.customers.map(customer => (
      <CustomerListItem
        customer={customer}
        key={customer.id}
      />
    ))
    return (
      <Paper className="customer-list-page">
        <Menu>{customers}</Menu>
      </Paper>
    )
  }
 }