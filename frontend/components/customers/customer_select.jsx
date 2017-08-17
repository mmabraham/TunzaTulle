import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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
          value: customer.id,
        }
      )
    })
    this.setState({dataSource: this.allCustomerItems})
  }

  handleChange(customer, i) {
    this.props.onSelect(null, i, customer && customer.id )
  }

  render() {
    return this.allCustomerItems ? (
      <AutoComplete
        floatingLabelText="Customer"
        openOnFocus={true}
        maxSearchResults={5}
        dataSource={this.state.dataSource}
        filter={AutoComplete.fuzzyFilter}
        onNewRequest={this.handleChange.bind(this)}
      />
    ) : null;
  }
}
