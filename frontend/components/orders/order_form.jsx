import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.order || {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.createOrder(this.state)
  }

  handleChange(field) {
    return (e, i, val) => {
      this.setState({[field]: e.target.value || val})
    }
  }

  render() {
    return (
      <form>
        <SelectField
          fullWidth={true}
          floatingLabelText="Status"
          value={this.state.status}
          onChange={this.handleChange('status')}
          >
          <MenuItem value={'pending'} primaryText="Pending" />
          <MenuItem value={'approved'} primaryText="Approved" />
          <MenuItem value={'shipped'} primaryText="Shipped" />
          <MenuItem value={'returned'} primaryText="Returned" />
          <MenuItem value={'canceled'} primaryText="Canceled" />
        </SelectField>
        <RaisedButton primary={true} onTouchTap={this.handleSubmit}>
          Save
        </RaisedButton>
      </form>
    )
  }
}
