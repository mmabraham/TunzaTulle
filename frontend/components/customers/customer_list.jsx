import React from 'react';
import CustomerListItem from './customer_list_item';
import CustomerDetail from './customer_detail';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import { NavLink } from 'react-router-dom';

export default class CustomersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { customerShowing: undefined }
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
        onTouchTap={() => this.setState({ customerShowing: customer }) }
      />
    ))
    return (
      <div className="customer-list-page">
        <Paper>
          <Menu>{customers}</Menu>
        </Paper>
        <CustomerDetail customer={this.state.customerShowing}/>
      </div>
    )
  }
 }
