import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import CustomerListItem from './customer_list_item';

export default class CustomerSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomers()
      .then(this.setCustomerItems.bind(this));
  }

  setCustomerItems() {
    this.allCustomerItems = this.props.customers.map(customer => {
      return (
        {
          text: customer.name,
          value: (
            <CustomerListItem customer={customer} key={customer.id}/>
          ),
        }
      )
    })
    this.setState({dataSource: this.allCustomerItems})
  }

  handleChange(customer, i) {
    this.props.onSelect(null, i, customer && customer.value && customer.value.key )
    console.log(customer)
  }

  render() {
    return this.allCustomerItems ? (
      <AutoComplete
        floatingLabelText="Customer"
        openOnFocus={true}
        dataSource={this.state.dataSource}
        filter={AutoComplete.caseInsensitiveFilter}
        onNewRequest={this.handleChange.bind(this)}
      />
    ) : null;
  }
}
