import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';

export default class CustomerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }

  componentWillReceiveProps(nextProps) {
    this.setCustomerItems(nextProps.customers || []);
  }

  setCustomerItems(customers) {
    this.allCustomerItems = customers.map(customer => {
      return (
        {
          text: customer.name,
          value: customer.id,
        }
      )
    })
    this.setState({dataSource: this.allCustomerItems})
  }

  handleChange(item, i) {
    this.props.onSelect(null, i, item && item.value )
  }

  render() {
    const initialCustomer = this.props.customers.find(customer => customer.id === this.props.initialCustomerId);
    return this.allCustomerItems ? (
      <AutoComplete
        hintText={(initialCustomer && initialCustomer.name) || 'Customer'}
        openOnFocus={true}
        maxSearchResults={5}
        dataSource={this.state.dataSource}
        filter={AutoComplete.fuzzyFilter}
        onNewRequest={this.handleChange.bind(this)}
      />
  ) : ( <CircularProgress /> );
  }
}
