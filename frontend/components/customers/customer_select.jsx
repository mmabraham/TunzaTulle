import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class CustomerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }

  componentWillReceiveProps(newProps) {
    this.setCustomerItems(newProps.customers || []);
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
    this.props.onSelect(null, i, item && item.id )
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
